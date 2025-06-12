const SUPABASE_URL = 'https://loxlxwyirrqkjrruqboq.supabase.co';
const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxveGx4d3lpcnJxa2pycnVxYm9xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU0ODk1NTYsImV4cCI6MjA2MTA2NTU1Nn0.k3an-R-O8yU6K8qmfnQqZhv2lUfx8aApTygI1tSNgiQ';

export const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
