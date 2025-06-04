// Import Express.js framework for building web servers
import express from "express";

// Import custom API router for product-related endpoints
import apiProductRouter_14 from "./routers/api/ProductRouter_14.js";

// Import product router for handling product page routes
import ProductRouter_14 from "./routers/api/ProductRouter_14.js";

// Import CORS middleware for handling Cross-Origin Resource Sharing
// Allows frontend applications to make requests from different domains
import cors from "cors";

// Import Morgan HTTP request logger middleware
// Logs HTTP requests for debugging and monitoring
import logger from "morgan";

// Create Express application instance
const app_14 = express();

// Initialize and configure Morgan logger middleware
// "dev" format provides colored output for development
app_14.use(logger("dev"));

// Enable CORS for all routes
// Allows cross-origin requests from client applications
app_14.use(cors());

// Serve static files from the 'public' directory
// Files in /public are accessible directly via HTTP
app_14.use(express.static("public"));

// Set EJS as the template engine for server-side rendering
// Allows dynamic HTML generation with embedded JavaScript
app_14.set("view engine", "ejs");

// Mount API router for product endpoints
// All routes in apiProductRouter_14 will be prefixed with '/api/product_14'
app_14.use("/api/product_14", apiProductRouter_14);

// Mount product page router
// Handles product-related page rendering routes
app_14.use("/product_14", ProductRouter_14);

// Route: Static product page
// Renders a static product page using EJS template
app_14.use("/product_14/static", (req, res, next) => {
  console.log("static"); // Log route access for debugging

  // Render the static product template with dynamic data
  res.render("product_14/static", {
    title: "Get Product - Static", // Page title
    name: "Liang-Ting Lin", // Student name
    id: "913410014", // Student ID
  });
});

// Route: Static blog page
// Renders a static blog page using EJS template
app_14.use("/blog_14/static", (req, res, next) => {
  // Render the static blog template with dynamic data
  res.render("blog_14/static_14", {
    title: "Get Blog - Static", // Page title
    name: "Liang-Ting Lin", // Student name
    id: "913410014", // Student ID
  });
});

// Default Route: Homepage
// Handles requests to the root path
app_14.use("/", (req, res, next) => {
  // Render the index template with server information
  res.render("index", {
    title: "Express Server", // Application title
    name: "Liang-Ting Lin", // Student information
    id: "913410014", // Student ID
  });
});

// Server Configuration: Set port from environment or default to 5000
const port = process.env.PORT || 5000;

// Start the server and listen for incoming requests
app_14.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
