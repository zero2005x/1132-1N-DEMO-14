const itemsContainer = document.querySelector(".items");

// API endpoint for your Node.js server
const url = "http://localhost:5000/api/shop_14";

let shopData = [];

const fetchShopData = async (url) => {
  try {
    const response = await fetch(url);
    const result = await response.json();
    console.log("API response:", result);
    return result.data; // Based on your apiShopRouter_14.js structure
  } catch (err) {
    console.error("Error fetching shop data:", err);
    return null;
  }
};

const displayWomensItems = (shopData) => {
  if (!shopData || !shopData.womens) {
    console.error("No womens data available");
    return;
  }

  const womensItems = shopData.womens;

  let itemsContent = womensItems
    .map((item) => {
      const { pid, title, price, local_img, remote_img } = item;
      // Use local_img if available, otherwise use remote_img
      const imageUrl = local_img || remote_img;

      return `
        <div class="collection-item">
          <img
            class="image"
            src="${imageUrl}"
            alt="${title}"
          />
          <div class="collection-footer">
            <span class="name">${title}</span>
            <span class="price">$${price}</span>
          </div>
          <button class="custom-button">Add to Cart</button>
        </div>
      `;
    })
    .join("");

  itemsContainer.innerHTML = itemsContent;
};

// Load data when page loads
document.addEventListener("DOMContentLoaded", async () => {
  console.log("Loading shop data from API...");
  shopData = await fetchShopData(url);

  if (shopData) {
    console.log("Shop data loaded:", shopData);
    displayWomensItems(shopData);
  } else {
    console.error("Failed to load shop data");
    itemsContainer.innerHTML =
      "<p>Failed to load products. Please try again later.</p>";
  }
});
