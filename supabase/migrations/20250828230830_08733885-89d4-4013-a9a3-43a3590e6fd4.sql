-- Enable RLS and create proper policies for payment_form_logs testing
ALTER TABLE public.payment_form_logs ENABLE ROW LEVEL SECURITY;

-- Allow authenticated users to insert their own payment logs
CREATE POLICY "User can insert own payment logs" 
ON public.payment_form_logs 
FOR INSERT 
TO authenticated 
WITH CHECK (auth.uid() = user_id OR user_id IS NULL);

-- Allow authenticated users to view their own payment logs
CREATE POLICY "User can view own payment logs" 
ON public.payment_form_logs 
FOR SELECT 
TO authenticated 
USING (auth.uid() = user_id OR user_id IS NULL);

-- Allow service role full access for edge functions
CREATE POLICY "Service role full access" 
ON public.payment_form_logs 
FOR ALL 
TO service_role 
USING (true) 
WITH CHECK (true);