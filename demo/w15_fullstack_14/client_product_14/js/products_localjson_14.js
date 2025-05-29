const productContainer = document.querySelector(".products-container");

const url = "./api/javascript-store-products.json";

let products_14 = [];

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

const displayProducts = (products) => {
  let productsContent = products
    .map((product) => {
      const { name, price, image, company, description } = product.fields;
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
    .join("");
  productContainer.innerHTML = productsContent;
};

document.addEventListener("DOMContentLoaded", async () => {
  const response = await fetch(url);
  const data = await response.json();
  console.log("data", data);

  displayProducts(data);
});
