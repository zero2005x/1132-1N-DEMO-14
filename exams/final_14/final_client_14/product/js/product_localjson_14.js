const productContainer = document.querySelector('.products-container');

const url = './api/productsData.json';

let products_14 = [];

const fetchProducts = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log('data', data);
    return data;
    // displayProducts(data.meals);
  } catch (err) {
    console.log(err);
  }
};

const displayProducts = (products) => {
  let productsContent = products
    .map((product) => {
      const { name, price, image } = product.fields;
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
    .join('');
  productContainer.innerHTML = productsContent;
};

document.addEventListener('DOMContentLoaded', async () => {
  products_14 = await fetchProducts(url);
  // console.log('projects_14', products_14);
  displayProducts(products_14);
});
