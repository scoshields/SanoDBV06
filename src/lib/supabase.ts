import { createClient } from '@supabase/supabase-js';

// For client-side, use import.meta.env
const supabaseUrl = typeof window !== 'undefined' 
  ? import.meta.env.VITE_SUPABASE_URL 
  : process.env.VITE_SUPABASE_URL;

const supabaseKey = typeof window !== 'undefined'
  ? import.meta.env.VITE_SUPABASE_ANON_KEY
  : process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing required Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseKey);