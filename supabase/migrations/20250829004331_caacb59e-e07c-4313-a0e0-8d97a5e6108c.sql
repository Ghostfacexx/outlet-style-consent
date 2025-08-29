-- Fix RLS policies for payment_form_logs to allow anonymous logging
-- Drop existing problematic policies
DROP POLICY IF EXISTS "Enable insert for users based on user_id" ON payment_form_logs;
DROP POLICY IF EXISTS "User can insert own payment logs" ON payment_form_logs;
DROP POLICY IF EXISTS "User can view own payment logs" ON payment_form_logs;
DROP POLICY IF EXISTS "authenticated_users_own_logs" ON payment_form_logs;

-- Create new policies that work for both authenticated and anonymous users
CREATE POLICY "Allow anonymous and authenticated inserts" 
ON payment_form_logs 
FOR INSERT 
TO public
WITH CHECK (
  -- Allow if user_id is null (anonymous) or matches authenticated user
  (user_id IS NULL) OR 
  (auth.uid() IS NOT NULL AND auth.uid() = user_id)
);

CREATE POLICY "Allow users to view their own logs" 
ON payment_form_logs 
FOR SELECT 
TO public
USING (
  -- Allow if user_id is null (anonymous session) or matches authenticated user
  (user_id IS NULL) OR 
  (auth.uid() IS NOT NULL AND auth.uid() = user_id)
);

-- Ensure RLS is enabled
ALTER TABLE payment_form_logs ENABLE ROW LEVEL SECURITY;