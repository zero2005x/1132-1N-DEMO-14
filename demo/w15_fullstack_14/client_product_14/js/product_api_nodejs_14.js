// Get reference to the DOM container for displaying products
const productContainer = document.querySelector(".products-container");

// URL pointing to local Node.js server API endpoint
// This connects to the Express server running on localhost:3000
const url = "http://localhost:3000/api/product_14";

// Global array to store product data (currently unused)
let products_14 = [];

// Async function to fetch products from local Node.js server
const fetchProducts = async (url) => {
  try {
    // Make HTTP request to local server API
    const response = await fetch(url);

    // Check for successful HTTP response
    if (!response.ok) {
      console.error(
        `API request failed: ${response.status} ${response.statusText}`
      );
      return []; // Return empty array on failure
    }

    // Parse JSON response from Node.js server
    const data = await response.json();
    console.log("data", data); // Log server response
    return data; // Return product data from database
  } catch (error) {
    // Handle network errors or server connection issues
    console.log("Error fetching products:", error);
    return []; // Return empty array on error
  }
};

// Function to display products fetched from Node.js server
const displayProducts = (products) => {
  // Validate input array
  if (!Array.isArray(products)) {
    console.error("displayProducts expects an array, but received:", products);
    productContainer.innerHTML = "<p>Could not load products.</p>";
    return;
  }

  // Handle empty results
  if (products.length === 0) {
    productContainer.innerHTML = "<p>No products to display.</p>";
    return;
  }

  // Transform database records into HTML
  let productsContent = products
    .map((product) => {
      // Destructure product fields from database structure
      // Note: Using 'tile' instead of 'title' (potential typo in database schema)
      const { tile, price, img } = product;

      // Generate HTML for each product from database
      return `
    <div class="single-product">
<img
src=${img}
class="single-product-img img"
alt=${tile}
/>
<footer>
<h3 class="name">${tile}</h3>
<span class="price">$${price}</span>
</footer>
</div>
    `;
    })
    .join(""); // Combine all HTML into single string

  // Insert generated HTML into DOM
  productContainer.innerHTML = productsContent;
};

// Alternative async function template (unused)
const getDataAsyncAwait = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log("data", data);

    // Commented line from meals API example
    // displayItems(data.meals);
  } catch (error) {
    console.log("error", error);
  }
};

// DOM loaded event listener
document.addEventListener("DOMContentLoaded", async () => {
  // Fetch products from local Node.js server and display them
  const fetchedProducts = await fetchProducts(url);
  displayProducts(fetchedProducts);
});
