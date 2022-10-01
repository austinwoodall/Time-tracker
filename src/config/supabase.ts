import { createClient } from "@supabase/supabase-js";

const options = {
	schema: "public",
	headers: { "x-my-custom-header": "my-app-name" },
	autoRefreshToken: true,
	persistSession: true,
	detectSessionInUrl: true
};

export const supabase = createClient(
	"https://vmauxzzevkhbgvlxizcu.supabase.co",
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZtYXV4enpldmtoYmd2bHhpemN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTkwMzUzMzcsImV4cCI6MTk3NDYxMTMzN30.jOua5zxcAJk3wOB1b-zV1aGVP27X8yDONmj34egqZ9g",
	options
);
