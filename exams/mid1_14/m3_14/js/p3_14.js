import { mid_products_14, products_14 } from './products_data_14.js';

console.log(`products_14`, products_14);

mid_products_14.push(products_14[0]);
mid_products_14.push(products_14[0]);
mid_products_14.push(products_14[1]);
mid_products_14.push(products_14[4]);
console.log(`mid_products_14`, mid_products_14);

//products-container
const productsContainer = document.querySelector('.products-container');

const displayProductsContainer = () => {
  const productsInfo = mid_products_14
    .map((item) => {
      const { id, title, price, category, img, remote_img } = item;
      console.log(title);
      console.log(price);
      console.log(category);
      console.log(img);
      return `
      <div class="single-product">
        <img
          src="${img}"
          class="single-product-img img"
          alt="${title} ${category}"
        />
        <footer>
          <h5 class="name">${id - 1}-${category}</h5>
          <span class="price">${price}</span>
        </footer>
      </div>
      `;
    })
    .join('');

  // console.log('displayProductsContainer', displayProductsContainer);
  productsContainer.innerHTML = productsInfo;
};

window.addEventListener('DOMContentLoaded', () => {
  displayProductsContainer();
});
