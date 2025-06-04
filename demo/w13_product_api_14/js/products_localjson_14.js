// Get reference to the container where products will be displayed
const productContainer = document.querySelector(".products-container");

// Local file path to JSON data - demonstrates fetching from local files vs external APIs
const url = "./api/javascript-store-products.json";

// Global array to store product data (currently unused)
let products_14 = [];

// Alternative async function (currently unused)
// This function structure matches the API example but isn't used in this implementation
const getDataAsyncAwait = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log("data", data);

    // Commented out line from meals API example
    // displayItems(data.meals);
  } catch (error) {
    console.log("error", error);
  }
};

// Function to display products from local JSON file
// Note: This uses the same structure as the external API version
const displayProducts = (products) => {
  // Transform product array into HTML string
  let productsContent = products
    .map((product) => {
      // Destructure fields from local JSON structure
      // Local JSON has same structure as external API: { fields: { name, price, image, ... } }
      const { name, price, image, company, description } = product.fields;

      // Generate HTML template for each product
      // Same template structure as API version for consistency
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
    .join(""); // Combine all HTML into single string

  // Insert generated HTML into the DOM
  productContainer.innerHTML = productsContent;
};

// DOM loaded event listener with simplified async/await pattern
document.addEventListener("DOMContentLoaded", async () => {
  // Directly fetch and display local JSON data
  const response = await fetch(url);
  const data = await response.json();
  console.log("data", data); // Log the local JSON data

  // Display the products from local file
  displayProducts(data);
});
