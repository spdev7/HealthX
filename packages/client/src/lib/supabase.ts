import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qkyygtzdbunxproajvwr.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFreXlndHpkYnVueHByb2FqdndyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY4NTE2MTcsImV4cCI6MjA1MjQyNzYxN30.nMXhPoNXaHaGnZP9zyXxJjORdwFr6CLdbf_NDgtQW_o';

export const supabase = createClient(supabaseUrl, supabaseKey);