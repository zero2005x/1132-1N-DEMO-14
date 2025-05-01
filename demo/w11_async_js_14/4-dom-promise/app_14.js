const heading1 = document.querySelector(".one");
const heading2 = document.querySelector(".two");
const heading3 = document.querySelector(".three");
const heading4 = document.querySelector(".four");

const btn = document.querySelector(".btn");

const addColor = (time, element, color) => {
  return new Promise((resolve, reject) => {
    if (!element) {
      reject(new Error(`There is no such element ${element}`));
    }
    setTimeout(() => {
      element.style.color = color;
      resolve();
    }, time);
  });
};

btn.addEventListener("click", () => {
  addColor(1000, heading1, "red")
    .then(() => {
      return addColor(1000, heading2, "green");
    })
    .then(() => {
      return addColor(1000, heading3, "blue");
    })
    .then(() => {
      return addColor(1000, heading4, "purple");
    })
    .catch((err) => {
      console.error(err);
    });
});
