// Import local product data as fallback option
import { products_14 } from "./products_data_14.js";

// Import configured Supabase client for database operations
import { _supabase } from "./clientSupabase_14.js";

// Get reference to the DOM container for displaying products
const productContainer = document.querySelector(".products-container");

// Log imported local data for debugging
console.log("products_14", products_14);

// Async function to fetch products from Supabase database
const fetchProducts = async () => {
  try {
    // Query Supabase database table "product_14" and select all columns
    // Using Supabase client's .from() method to specify table and .select() for columns
    const { data, error } = await _supabase.from("product_14").select("*");
    console.log("data", data); // Log database response

    // Check if Supabase returned an error
    if (error) throw error;

    return data; // Return database records
  } catch (error) {
    // Handle database connection errors, query errors, etc.
    console.error("Error fetching products:", error);
    return []; // Return empty array on error
  }
};

// Function to display products with support for both local and remote images
const displayProducts = (products) => {
  // Transform product data into HTML string
  let productsContent = products
    .map((product) => {
      // Destructure product properties from database/local data structure
      const { id, title, price, img, remote_img } = product;

      // Generate HTML template for each product
      // Uses remote_img if available, otherwise falls back to local img
      return `
        <div class="single-product">
        <img
          src=${remote_img ? remote_img : img}
          class="single-product-img img"
          alt=${title}
        />
        <footer>
          <h3 class="name">${id}-${title}</h3>
          <span class="price">$${price}</span>
        </footer>
      </div>
    `;
    })
    .join(""); // Combine all product HTML

  // Insert generated HTML into DOM
  productContainer.innerHTML = productsContent;
};

// Event listener with comprehensive error handling and fallback strategy
document.addEventListener("DOMContentLoaded", async () => {
  // First attempt: Fetch from Supabase database
  fetchProducts()
    .then((products) => {
      // Check if database returned any products
      if (products.length > 0) {
        displayProducts(products); // Display database products
      } else {
        console.log("No products found in the database.");
        displayProducts(products_14); // Fallback to local data
      }
    })
    .catch((error) => {
      console.error("Error fetching products:", error);
      // Fallback to local data if database fetch fails
      displayProducts(products_14);
    });

  // Note: This line causes duplicate display - should be removed
  // It displays local data regardless of database success/failure
  displayProducts(products_14);
});
