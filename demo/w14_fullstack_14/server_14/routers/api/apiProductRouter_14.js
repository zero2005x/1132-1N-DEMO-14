// Import Express framework for creating router instances
import express from "express";

// Import the database connection pool for PostgreSQL operations
// This provides access to the configured database connection
import db from "../../utils/database.js";

// Create a new Express router instance
// Routers allow modularizing route definitions into separate files
const router = express.Router();

// GET Route: Fetch all products from the database
// This endpoint handles requests to '/api/product_14/' (base path set in server_14.js)
router.get("/", async (req, res, next) => {
  try {
    // Execute SQL query to retrieve all records from product_14 table
    // Using parameterized query prevents SQL injection attacks
    const results = await db.query("SELECT * FROM product_14");

    // Optional: Log the query results for debugging purposes
    // Commented out to reduce console output in production
    // console.log("results", JSON.stringify(results.rows));

    // Send the query results as JSON response
    // results.rows contains the actual data from PostgreSQL
    res.json(results.rows);
  } catch (error) {
    // Handle database connection errors, query syntax errors, etc.
    console.error("Error testing the database connection", error);

    // In production, you might want to send an error response:
    // res.status(500).json({ error: "Database error occurred" });
  }
});

// Export the router for use in the main server file
// This allows the router to be mounted at a specific path in server_14.js
export default router;
