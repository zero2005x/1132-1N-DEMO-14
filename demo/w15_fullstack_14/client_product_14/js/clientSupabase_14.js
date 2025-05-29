const SUPERBASE_URL = "https://npxswnloyvdrrifnines.supabase.co";
const SUPERBASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5weHN3bmxveXZkcnJpZm5pbmVzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU0OTE0MTUsImV4cCI6MjA2MTA2NzQxNX0.JGp0m9t7_EGFkBeavJ-MVWJFp36jIMQR7TIaO32orTg";

export const _supabase = supabase.createClient(
  SUPERBASE_URL,
  SUPERBASE_ANON_KEY
);

export const supabaseAuthListener = _supabase.auth.onAuthStateChange(
  (event, session) => {
    if (event === "SIGNED_IN") {
      console.log("User signed in:", session.user);
    } else if (event === "SIGNED_OUT") {
      console.log("User signed out");
    }
  }
);

export const supabaseClient = _supabase;
export const supabaseAuth = _supabase.auth;
export const supabaseStorage = _supabase.storage;
export const supabaseDatabase = _supabase.from("products");
export const supabaseStorageBucket = _supabase.storage.from("products");
export const supabaseStorageBucketUrl = `${SUPERBASE_URL}/storage/v1/object/public/products/`;
