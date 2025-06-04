// Supabase project configuration constants
// These credentials connect to a specific Supabase project instance
const SUPERBASE_URL = "https://npxswnloyvdrrifnines.supabase.co";
const SUPERBASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5weHN3bmxveXZkcnJpZm5pbmVzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU0OTE0MTUsImV4cCI6MjA2MTA2NzQxNX0.JGp0m9t7_EGFkBeavJ-MVWJFp36jIMQR7TIaO32orTg";

// Create and export the main Supabase client instance
// This client handles all database operations, authentication, and storage
export const _supabase = supabase.createClient(
  SUPERBASE_URL,
  SUPERBASE_ANON_KEY
);

// Set up authentication state listener for monitoring user login/logout events
// This listener triggers whenever a user's authentication status changes
export const supabaseAuthListener = _supabase.auth.onAuthStateChange(
  (event, session) => {
    // Handle user sign-in event
    if (event === "SIGNED_IN") {
      console.log("User signed in:", session.user);
    }
    // Handle user sign-out event
    else if (event === "SIGNED_OUT") {
      console.log("User signed out");
    }
  }
);

// Export individual Supabase service modules for specific use cases
export const supabaseClient = _supabase; // Full client access
export const supabaseAuth = _supabase.auth; // Authentication services
export const supabaseStorage = _supabase.storage; // File storage services
export const supabaseDatabase = _supabase.from("products"); // Direct access to products table
export const supabaseStorageBucket = _supabase.storage.from("products"); // Products storage bucket
export const supabaseStorageBucketUrl = `${SUPERBASE_URL}/storage/v1/object/public/products/`; // Public URL for product images

// Note: The exports provide different levels of access:
// - supabaseClient: Full Supabase functionality
// - supabaseAuth: User authentication and session management
// - supabaseStorage: File upload/download operations
// - supabaseDatabase: Direct table operations (pre-configured for "products" table)
// - supabaseStorageBucket: File operations specific to products bucket
// - supabaseStorageBucketUrl: Base URL for constructing public file URLs
