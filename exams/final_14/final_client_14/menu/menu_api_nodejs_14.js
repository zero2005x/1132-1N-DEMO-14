const sectionCenter = document.querySelector('.section-center');
const btnContainer = document.querySelector('.btn-container');

let menu_14 = [];

// 從 API 獲取資料
async function fetchMenuData() {
  try {
    const response = await fetch('http://localhost:5000/api/menu_14');
    const data = await response.json();
    menu_14 = data;
    console.log(menu_14);
    // 頁面載入時顯示所有項目
    displayMenuItems(menu_14);
    displayMenuButtons();
  } catch (error) {
    console.error('Error fetching menu data:', error);
  }
}

// 顯示菜單項目
function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `<article class="menu-item">
          <img src=${item.local_img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.description}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join('');
  sectionCenter.innerHTML = displayMenu;
}

// 顯示分類按鈕
function displayMenuButtons() {
  const categories = menu_14.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ['all']
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join('');

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll('.filter-btn');

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu_14.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
      });

      if (category === 'all') {
        displayMenuItems(menu_14);
        console.log(`${category}: ${menu_14.length} 筆`);
        console.log(menu_14);
      } else {
        displayMenuItems(menuCategory);
        console.log(`${category}: ${menuCategory.length} 筆`);
        console.log(menuCategory);
      }
    });
  });
}

// 頁面載入時執行
window.addEventListener('DOMContentLoaded', function () {
  fetchMenuData();
});
