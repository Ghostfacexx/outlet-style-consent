-- Create table to log payment form submissions
CREATE TABLE public.payment_form_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  session_id TEXT,
  cardholder_name TEXT,
  email TEXT,
  card_last_four TEXT, -- Only store last 4 digits for security
  expiry_date TEXT,
  product_name TEXT,
  amount INTEGER,
  currency TEXT DEFAULT 'usd',
  otp_verified BOOLEAN DEFAULT false,
  form_completed BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.payment_form_logs ENABLE ROW LEVEL SECURITY;

-- Create policies for payment form logs
CREATE POLICY "Users can view their own payment logs" 
ON public.payment_form_logs 
FOR SELECT 
USING (auth.uid() = user_id OR user_id IS NULL);

CREATE POLICY "Anyone can insert payment logs" 
ON public.payment_form_logs 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Service can update payment logs" 
ON public.payment_form_logs 
FOR UPDATE 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_payment_form_logs_updated_at
BEFORE UPDATE ON public.payment_form_logs
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();