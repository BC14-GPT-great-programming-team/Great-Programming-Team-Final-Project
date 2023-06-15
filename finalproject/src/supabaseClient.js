import { createClient } from '@supabase/supabase-js'
// import dotenv from 'dotenv';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;
// const supabaseUrl = "https://ufthkwvemfwmnnomazlu.supabase.co";
// const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVmdGhrd3ZlbWZ3bW5ub21hemx1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY1NjY3MDEsImV4cCI6MjAwMjE0MjcwMX0.5Y8TVx-UHgwBUMkHceMtUARwpmIvPlIEZHogdIqqc2A";
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;