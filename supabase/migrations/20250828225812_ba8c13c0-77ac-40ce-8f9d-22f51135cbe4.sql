-- Fix security issues by removing sensitive data logging
-- Update activity_logs to remove IP tracking
ALTER TABLE public.activity_logs 
DROP COLUMN IF EXISTS ip_address;

-- Update payment_form_logs to ensure no sensitive payment data is stored
ALTER TABLE public.payment_form_logs 
DROP COLUMN IF EXISTS card_last_four,
DROP COLUMN IF EXISTS expiry_date,
ADD COLUMN IF NOT EXISTS payment_method_type text DEFAULT 'card',
ADD COLUMN IF NOT EXISTS form_step text;