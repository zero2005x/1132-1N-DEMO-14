// Get reference to the DOM container for product display
const productContainer = document.querySelector(".products-container");

// Local JSON file path containing product data
// Demonstrates fetching from static local files vs. APIs or databases
const url = "./api/javascript-store-products.json";

// Global array to store product data (currently unused)
let products_14 = [];

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

// Function to display products from local JSON file
const displayProducts = (products) => {
  // Transform product array into HTML string
  let productsContent = products
    .map((product) => {
      // Destructure fields from local JSON structure
      // Local JSON uses same structure as external API: { fields: { name, price, image, ... } }
      const { name, price, image, company, description } = product.fields;

      // Generate HTML template for each product
      // Uses image[0].url for the first image in the array
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

  // Insert generated HTML into DOM
  productContainer.innerHTML = productsContent;
};

// DOM loaded event listener with direct fetch
document.addEventListener("DOMContentLoaded", async () => {
  // Directly fetch local JSON file without separate function
  const response = await fetch(url);
  const data = await response.json();
  console.log("data", data); // Log local JSON data

  // Display products from local file
  displayProducts(data);
});
