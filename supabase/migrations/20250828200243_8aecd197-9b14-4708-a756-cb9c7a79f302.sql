-- Configure OTP settings for better security
-- Set OTP token expiry to 10 minutes (600 seconds) which is more secure than default
UPDATE auth.config 
SET value = '600'
WHERE parameter = 'OTP_EXPIRY';