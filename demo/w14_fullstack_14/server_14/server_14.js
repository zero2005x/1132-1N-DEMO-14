// Import the Express.js framework for building web servers
// Express provides middleware, routing, and HTTP utilities
import express from "express";

// Import the custom API router for handling product-related endpoints
// This router contains all product API route definitions
import apiProductRouter_14 from "./routers/api/apiProductRouter_14.js";

// Create an Express application instance
// This app object contains all server configuration and middleware
const app_14 = express();

// Middleware: Serve static files from the 'public' directory
// This allows direct access to CSS, images, HTML files, etc.
// Files in /public can be accessed via HTTP without additional routing
app_14.use(express.static("public"));

// Set EJS as the template engine for server-side rendering
// EJS allows embedding JavaScript in HTML templates with <%= %> syntax
app_14.set("view engine", "ejs");

// Route: Handle requests for static product page
// When accessing '/product_14/static', render the EJS template with data
app_14.use("/product_14/static", (req, res, next) => {
  console.log("static"); // Log route access for debugging

  // Render the static product page template with dynamic data
  res.render("product_14/static", {
    title: "Get Product - Static", // Page title passed to template
    name: "Liang-Ting Lin", // Student name for display
    id: "913410014", // Student ID for display
  });
});

// API Route: Mount the product API router at '/api/product_14'
// All routes defined in apiProductRouter_14 will be prefixed with this path
// Example: GET /api/product_14/ will fetch all products from database
app_14.use("/api/product_14", apiProductRouter_14);

// Default Route: Handle root path requests
// This serves as the homepage/landing page of the application
app_14.use("/", (req, res, next) => {
  // Render the index template with server information
  res.render("index", {
    title: "Express Server", // Application title
    name: "Liang-Ting Lin", // Student information
    id: "913410014", // Student ID
  });
});

// Server Configuration: Set port for the application
// Uses environment variable PORT if available, otherwise defaults to 5000
const port = process.env.PORT || 5000;

// Start the server and listen for incoming requests
app_14.listen(port, () => {
  // Log server startup confirmation with port information
  console.log(`Server is running on port ${port}`);
});
