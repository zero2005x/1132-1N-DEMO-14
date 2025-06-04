// Get reference to the DOM container where products will be displayed
const productContainer = document.querySelector(".products-container");

// External API endpoint for fetching product data
// This is a public course API that provides furniture/store products
const url = "https://www.course-api.com/javascript-store-products";

// Global array to store fetched product data (currently unused)
let products_14 = [];

// Async function to fetch products from external API with error handling
const fetchProducts = async (url) => {
  try {
    // Make HTTP request to the external API
    const response = await fetch(url);

    // Check if the HTTP response is successful (status 200-299)
    if (!response.ok) {
      console.error(
        `API request failed: ${response.status} ${response.statusText}`
      );
      return []; // Return empty array on failure
    }

    // Parse JSON response data
    const data = await response.json();
    console.log("data", data); // Log the API response for debugging
    return data; // Return the product data
  } catch (error) {
    // Handle network errors, parsing errors, or other exceptions
    console.log("Error fetching products:", error);
    return []; // Return empty array on error
  }
};

// Alternative async function (currently unused)
// Template for different API implementations
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

// Function to render products as HTML elements
const displayProducts = (products) => {
  // Validate input - ensure products is an array
  if (!Array.isArray(products)) {
    console.error("displayProducts expects an array, but received:", products);
    productContainer.innerHTML = "<p>Could not load products.</p>";
    return;
  }

  // Handle empty product array
  if (products.length === 0) {
    productContainer.innerHTML = "<p>No products to display.</p>";
    return;
  }

  // Transform product data into HTML string using map()
  let productsContent = products
    .map((product) => {
      // Destructure product fields from API response structure
      // External API returns data in format: { fields: { name, price, image, ... } }
      const { name, price, image } = product.fields;

      // Generate HTML template for each product
      return `
    <div class="single-product">
<img
src=${image[0].url}
class="single-product-img img"
alt=${name}
/>
<footer>
<h3 class="name">${name}</h3>
<span class="price">$${price}</span>
</footer>
</div>
    `;
    })
    .join(""); // Combine all product HTML into a single string

  // Insert the generated HTML into the DOM container
  productContainer.innerHTML = productsContent;
};

// Event listener that runs when DOM is fully loaded
document.addEventListener("DOMContentLoaded", async () => {
  // Fetch products from external API and display them
  const fetchedProducts = await fetchProducts(url);
  displayProducts(fetchedProducts);
});
