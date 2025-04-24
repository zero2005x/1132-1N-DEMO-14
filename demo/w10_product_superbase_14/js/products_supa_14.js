import { products_14 } from "./products_data_14.js";
import { _supabase } from "./clientSupabase_14.js";

const productContainer = document.querySelector(".products-container");

console.log("products_14", products_14);

const fetchProducts = async () => {
  try {
    const { data, error } = await _supabase.from("product_14").select("*");
    console.log("data", data);
    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

const displayProducts = (products) => {
  let productsContent = products
    .map((product) => {
      const { id, title, price, img, remote_img } = product;
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
    .join("");
  productContainer.innerHTML = productsContent;
};

document.addEventListener("DOMContentLoaded", async () => {
  fetchProducts()
    .then((products) => {
      if (products.length > 0) {
        displayProducts(products);
      } else {
        console.log("No products found in the database.");
        displayProducts(products_14);
      }
    })
    .catch((error) => {
      console.error("Error fetching products:", error);
      // Fallback to local data if there's an error
      displayProducts(products_14);
    });
  displayProducts(products_14);
});
