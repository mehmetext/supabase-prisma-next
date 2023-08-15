import { SupabaseClient, createClient } from "@supabase/supabase-js";

const globalForSupabase = globalThis as unknown as {
  supabase: SupabaseClient | undefined;
};

export const supabase =
  globalForSupabase.supabase ??
  createClient(
    process.env.SUPABASE_URL as string,
    process.env.SUPABASE_PUBLIC_ANON_KEY as string,
    {
      auth: {
        persistSession: false,
      },
    }
  );

if (process.env.NODE_ENV !== "production")
  globalForSupabase.supabase = supabase;
