const productContainer = document.querySelector('.items');

const url = 'http://localhost:5000/api/shop_14';

let products_14 = [];

const fetchProducts = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log('shop_14 json from Node.js server', data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

const displayProducts = (products) => {
  let productsContent = products
    .map((product) => {
      const { title, price, local_img } = product;
      return `
          <div class="collection-item">
            <img class="image" src=${local_img} />
            <div class="collection-footer">
              <span class="name">${title}</span>
              <span class="price">${price}</span>
            </div>
            <button class="custom-button">Add to Cart</button>
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
