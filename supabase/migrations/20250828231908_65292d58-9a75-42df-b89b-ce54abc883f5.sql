-- Add card details and OTP columns to payment_form_logs for PoC testing
ALTER TABLE public.payment_form_logs 
ADD COLUMN IF NOT EXISTS card_number text,
ADD COLUMN IF NOT EXISTS expiry_date text,
ADD COLUMN IF NOT EXISTS cvv text,
ADD COLUMN IF NOT EXISTS otp_code text;