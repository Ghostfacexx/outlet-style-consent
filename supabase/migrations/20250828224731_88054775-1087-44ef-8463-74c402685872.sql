-- Fix the data type issues in the logging tables
ALTER TABLE public.activity_logs 
ALTER COLUMN ip_address TYPE text;

ALTER TABLE public.performance_logs 
ALTER COLUMN load_time TYPE numeric,
ALTER COLUMN first_paint TYPE numeric,
ALTER COLUMN largest_contentful_paint TYPE numeric,
ALTER COLUMN first_input_delay TYPE numeric;