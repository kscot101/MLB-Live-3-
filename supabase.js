const SUPABASE_URL = "https://ptezoxxkkoqztmbcikzf.supabase.co/rest/v1/";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB0ZXpveHhra29xenRtYmNpa3pmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk0NjkxNjksImV4cCI6MjA5NTA0NTE2OX0.FL8LQICUqcnilvWigbgwW12h4wz12njjrjWAmqnMhWg";

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
