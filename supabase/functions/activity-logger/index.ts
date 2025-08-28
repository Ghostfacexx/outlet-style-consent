import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ActivityLogData {
  event_type: string;
  event_data: any;
  page_url?: string;
  user_agent?: string;
  session_id: string;
}

interface PerformanceLogData {
  session_id: string;
  page_url: string;
  load_time?: number;
  first_paint?: number;
  largest_contentful_paint?: number;
  cumulative_layout_shift?: number;
  first_input_delay?: number;
  metrics?: any;
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const { log_type, ...data } = await req.json();

    console.log(`Activity Logger called - Type: ${log_type}`);
    console.log('Data:', JSON.stringify(data, null, 2));

    // Privacy-compliant: No IP logging for security compliance
    console.log('Activity logger called without IP tracking for privacy compliance');

    if (log_type === 'activity') {
      const activityData: ActivityLogData = data;
      
      const { error } = await supabase
        .from('activity_logs')
        .insert({
          session_id: activityData.session_id,
          event_type: activityData.event_type,
          event_data: activityData.event_data,
          page_url: activityData.page_url,
          user_agent: activityData.user_agent
        });

      if (error) {
        console.error('Activity log error:', error);
        return new Response(
          JSON.stringify({ error: 'Failed to log activity' }), 
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      console.log('Activity logged successfully');
    } else if (log_type === 'performance') {
      const performanceData: PerformanceLogData = data;
      
      const { error } = await supabase
        .from('performance_logs')
        .insert(performanceData);

      if (error) {
        console.error('Performance log error:', error);
        return new Response(
          JSON.stringify({ error: 'Failed to log performance' }), 
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      console.log('Performance logged successfully');
    } else if (log_type === 'batch') {
      const { activity_logs = [], performance_logs = [] } = data;
      
      // Batch insert activity logs
      if (activity_logs.length > 0) {
        const { error: activityError } = await supabase
          .from('activity_logs')
          .insert(activity_logs);

        if (activityError) {
          console.error('Batch activity log error:', activityError);
        }
      }

      // Batch insert performance logs
      if (performance_logs.length > 0) {
        const { error: performanceError } = await supabase
          .from('performance_logs')
          .insert(performance_logs);

        if (performanceError) {
          console.error('Batch performance log error:', performanceError);
        }
      }

      console.log(`Batch logged: ${activity_logs.length} activities, ${performance_logs.length} performance entries`);
    }

    return new Response(
      JSON.stringify({ success: true }), 
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Activity logger error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }), 
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});