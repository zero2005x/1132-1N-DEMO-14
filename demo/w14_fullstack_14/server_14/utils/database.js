// Import the PostgreSQL client library (node-postgres)
// Using destructuring to import only the Pool class from the 'pg' package
import pkg from "pg";
const { Pool } = pkg;

// Create a new PostgreSQL connection pool
// Connection pools manage multiple database connections efficiently
// This allows multiple concurrent requests without creating new connections each time
let pool = new Pool({
  host: "localhost", // Database server address (local development)
  port: 5432, // PostgreSQL default port
  user: "postgres", // Database username
  password: "user", // Database password (should be in environment variables for security)
  database: "js_demo_14", // Target database name
});

// Optional: Log connection details for debugging
// Currently commented out to avoid exposing sensitive information
//console.log("Connecting to the database...", pool.options);

// Export the connection pool for use in other modules
// This allows other files to import and use the same database connection
export default pool;

// Note: In production, database credentials should be stored in environment variables:
// host: process.env.DB_HOST,
// port: process.env.DB_PORT,
// user: process.env.DB_USER,
// password: process.env.DB_PASSWORD,
// database: process.env.DB_NAME,
