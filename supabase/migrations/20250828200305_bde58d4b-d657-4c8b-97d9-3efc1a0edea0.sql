-- Improve RLS policies for payment form logs to address security concerns

-- Drop existing policies
DROP POLICY IF EXISTS "Users can view their own payment logs" ON public.payment_form_logs;
DROP POLICY IF EXISTS "Anyone can insert payment logs" ON public.payment_form_logs;
DROP POLICY IF EXISTS "Service can update payment logs" ON public.payment_form_logs;

-- Create more restrictive policies
-- Only authenticated users can view their own logs OR service role can access all
CREATE POLICY "authenticated_users_own_logs" ON public.payment_form_logs
FOR SELECT 
USING (
  auth.uid() IS NOT NULL AND 
  (auth.uid() = user_id OR user_id IS NULL)
);

-- Only authenticated users can insert their own logs OR service role
CREATE POLICY "authenticated_users_insert_logs" ON public.payment_form_logs
FOR INSERT 
WITH CHECK (
  auth.uid() IS NOT NULL AND 
  (auth.uid() = user_id OR user_id IS NULL)
);

-- Only service role can update logs (for edge functions)
CREATE POLICY "service_role_update_logs" ON public.payment_form_logs
FOR UPDATE 
USING (auth.role() = 'service_role');

-- Add index for better performance
CREATE INDEX IF NOT EXISTS idx_payment_form_logs_user_id ON public.payment_form_logs(user_id);
CREATE INDEX IF NOT EXISTS idx_payment_form_logs_session_id ON public.payment_form_logs(session_id);