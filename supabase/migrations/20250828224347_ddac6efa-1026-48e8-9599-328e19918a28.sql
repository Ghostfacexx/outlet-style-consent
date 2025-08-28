-- Create comprehensive activity logs table
CREATE TABLE public.activity_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id text NOT NULL,
  user_id uuid REFERENCES auth.users(id),
  event_type text NOT NULL,
  event_data jsonb NOT NULL,
  page_url text,
  user_agent text,
  ip_address inet,
  timestamp timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.activity_logs ENABLE ROW LEVEL SECURITY;

-- Create permissive policies for PoC logging
CREATE POLICY "Allow all inserts for logging" 
ON public.activity_logs 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Allow service role full access" 
ON public.activity_logs 
FOR ALL 
USING (auth.role() = 'service_role');

CREATE POLICY "Users can view their own logs" 
ON public.activity_logs 
FOR SELECT 
USING (auth.uid() = user_id OR user_id IS NULL);

-- Create index for performance
CREATE INDEX idx_activity_logs_session ON public.activity_logs(session_id);
CREATE INDEX idx_activity_logs_timestamp ON public.activity_logs(timestamp);
CREATE INDEX idx_activity_logs_event_type ON public.activity_logs(event_type);

-- Create page performance logs table
CREATE TABLE public.performance_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id text NOT NULL,
  page_url text NOT NULL,
  load_time integer,
  first_paint integer,
  largest_contentful_paint integer,
  cumulative_layout_shift numeric,
  first_input_delay integer,
  metrics jsonb,
  timestamp timestamptz DEFAULT now()
);

-- Enable RLS for performance logs
ALTER TABLE public.performance_logs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow all performance log inserts" 
ON public.performance_logs 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Allow service role access to performance logs" 
ON public.performance_logs 
FOR ALL 
USING (auth.role() = 'service_role');