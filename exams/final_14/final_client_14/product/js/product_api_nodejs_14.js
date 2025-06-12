const productContainer = document.querySelector('.products-container');

const url = 'http://localhost:5000/api/product_14';

let products_14 = [];

const fetchProducts = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log('product_14 json from Node.js server', data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

const displayProducts = (products) => {
  let productsContent = products
    .map((product) => {
      const { title, price, img } = product;
      return `
        <div class="single-product">
        <img
          src=${img}
          class="single-product-img img"
          alt=${title}
        />
        <footer>
          <h3 class="name">${title}</h3>
          <span class="price">$${price}</span>
        </footer>
      </div>
    `;
    })
    .join('');
  productContainer.innerHTML = productsContent;
};

document.addEventListener('DOMContentLoaded', async () => {
  products_14 = await fetchProducts(url);
  // console.log('projects_14', products_14);
  displayProducts(products_14);
});
