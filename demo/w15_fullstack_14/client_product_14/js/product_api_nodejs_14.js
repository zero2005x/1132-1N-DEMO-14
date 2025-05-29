const productContainer = document.querySelector(".products-container");

const url = "http://localhost:3000/api/product_14";

let products_14 = [];

const fetchProducts = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.error(
        `API request failed: ${response.status} ${response.statusText}`
      );
      return [];
    }
    const data = await response.json();
    console.log("data", data);
    return data;
  } catch (error) {
    console.log("Error fetching products:", error);
    return [];
  }
};

const displayProducts = (products) => {
  if (!Array.isArray(products)) {
    console.error("displayProducts expects an array, but received:", products);
    productContainer.innerHTML = "<p>Could not load products.</p>";
    return;
  }
  if (products.length === 0) {
    productContainer.innerHTML = "<p>No products to display.</p>";
    return;
  }
  let productsContent = products
    .map((product) => {
      const { tile, price, img } = product;
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
    .join("");
  productContainer.innerHTML = productsContent;
};

const getDataAsyncAwait = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log("data", data);

    // displayItems(data.meals);
  } catch (error) {
    console.log("error", error);
  }
};

document.addEventListener("DOMContentLoaded", async () => {
  const fetchedProducts = await fetchProducts(url);
  displayProducts(fetchedProducts);
});
