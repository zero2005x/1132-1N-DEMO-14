import menu_14 from "./data_14.js";

const sectionCenter = document.querySelector(".menu-center");
const btnContainer = document.querySelector(".btn-center");

console.log("menu_14", menu_14);

const displayMenuItems = (menuItems) => {
  let displayMenu = menuItems
    .map((item) => {
      const { id, title, category, price, img, desc } = item;
      return `
      <article class="menu-item">
      <img
        src=${img}
        alt="${title}" // Use title for alt text for better accessibility
        class="photo"
      />
      <div class="item-info">
        <header>
          <h4>${title}</h4>
          <h4 class="price">$${price}</h4>
        </header>
        <p class="item-text">
          ${desc}
        </p>
      </div>
    </article>
      `;
    })
    .join("");
  sectionCenter.innerHTML = displayMenu;
};

const displayMenuButtons = () => {
  const menuCategories = new Set(
    menu_14.map((item) => {
      return item.category;
    })
  );

  const categories = ["all", ...menuCategories];

  let menuButtons = categories
    .map((category) => {
      return `
    <button type="button" class="filter-btn" data-id=${category}>${category}</button
    >
    `;
    })
    .join("");
  btnContainer.innerHTML = menuButtons;

  // Use Event Delegation on the button container
  btnContainer.addEventListener("click", (e) => {
    // Check if the clicked element is a filter button
    if (e.target.classList.contains("filter-btn")) {
      const category = e.target.dataset.id;
      console.log("data-id", category);
      // Use menu_14 instead of the undefined 'menu'
      const filterMenu = menu_14.filter((item) => item.category === category);
      if (category === "all") {
        // Use menu_14 when category is 'all'
        displayMenuItems(menu_14);
      } else {
        displayMenuItems(filterMenu);
      }
    }
  });
};

window.addEventListener("DOMContentLoaded", () => {
  displayMenuItems(menu_14);
  displayMenuButtons();
});
