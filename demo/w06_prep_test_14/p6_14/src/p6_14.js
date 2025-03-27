import { menu_14 } from "./data_14.js";

console.log("menu_14", menu_14);

const section = document.querySelector(".section-center");

const displayMenuItems = () => {
  const menuInfo = menu_14
    .map((item) => {
      return `
      <article class="menu-item">
    <img src=${item.img} alt=${item.title} class="photo" />
    <div class="item-info">
      <header>
        <h4>${item.title}</h4>
        <h4 class="price">$${item.price}</h4>
      </header>
      <p class="item-text">
        ${item.desc}
      </p>
     
    </div>
    
    </article>`;
    })
    .join("");
  console.log(menuInfo);
  section.innerHTML = menuInfo;
};

window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu_14);
});
