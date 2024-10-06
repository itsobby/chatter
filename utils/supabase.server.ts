// utils/supabase.server.ts
import { createServerClient } from "@supabase/auth-helpers-remix";
import type { Database } from "db_types"; // Make sure you have this type defined properly

// Export a function that creates a Supabase client for server-side operations
export default ({
  request,
  response,
}: {
  request: Request; // Incoming request object
  response: Response; // Outgoing response object
}) =>
  createServerClient<Database>(
    process.env.VITE_SUPABASE_URL!, // Ensure SUPABASE_URL is defined in your .env
    process.env.VITE_SUPABASE_ANON_KEY!, // Ensure SUPABASE_ANON_KEY is defined in your .env
    { request, response } // Options for auth helpers
  );
