const btn = document.querySelector(".btn");
const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=Cheese";

let persons = [];

btn.addEventListener("click", async () => {
  getDataAsyncAwait(url);
});

const getDataAsyncAwait = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log("data.meals", data.meals);

    displayItems(data.meals);
  } catch (error) {
    console.log("error", error);
  }
};

const displayItems = (data) => {
  const dispalyData = data
    .map((item) => {
      return `<p> ${item.strMeal} </p>`;
    })
    .join("");
  const element = document.createElement("div");
  element.innerHTML = dispalyData;
  document.body.appendChild(element);
};
