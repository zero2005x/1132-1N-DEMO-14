// Import the database connection pool from the database configuration file
import db from "./database.js";

// Async function to test database connectivity and query functionality
// This function verifies that the database connection is working properly
const testDB = async () => {
  try {
    // Execute a simple SELECT query to fetch all records from product_14 table
    // This tests both the connection and the table existence
    const results = await db.query("SELECT * FROM product_14");

    // Log the query results in JSON format for debugging
    // JSON.stringify converts the results object to a readable string
    console.log("results", JSON.stringify(results.rows));

    // results.rows contains the actual data returned from PostgreSQL
    // results.rowCount would contain the number of rows returned
    // results.fields would contain metadata about the columns
  } catch (error) {
    // Handle various types of errors:
    // - Connection errors (database server not running)
    // - Authentication errors (wrong username/password)
    // - Query errors (table doesn't exist, syntax errors)
    console.error("Error testing the database connection", error);
  }
};

// Execute the test function immediately when this file is imported or run
// This provides immediate feedback about database connectivity
testDB();

// Export the test function for potential use in other modules
// This allows other files to run database tests programmatically
export default testDB;

// Usage scenarios:
// 1. Run directly: node utils/db-test.js
// 2. Import in other files for testing database before starting server
// 3. Use in development scripts to verify database setup
