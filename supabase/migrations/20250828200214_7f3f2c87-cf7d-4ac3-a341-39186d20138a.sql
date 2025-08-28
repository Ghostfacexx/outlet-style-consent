-- Fix the security issues by properly recreating the function

-- 1. Drop the trigger first
DROP TRIGGER IF EXISTS update_payment_form_logs_updated_at ON public.payment_form_logs;

-- 2. Drop and recreate the function with proper security settings
DROP FUNCTION IF EXISTS public.update_updated_at_column() CASCADE;

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql 
SECURITY DEFINER
SET search_path = public;

-- 3. Recreate the trigger
CREATE TRIGGER update_payment_form_logs_updated_at
BEFORE UPDATE ON public.payment_form_logs
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();