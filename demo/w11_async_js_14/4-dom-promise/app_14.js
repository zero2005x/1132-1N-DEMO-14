// DOM element selection - same as previous example
const heading1 = document.querySelector(".one");
const heading2 = document.querySelector(".two");
const heading3 = document.querySelector(".three");
const heading4 = document.querySelector(".four");

const btn = document.querySelector(".btn");

// Promise-based function to handle asynchronous color changes
// Returns a Promise that resolves when the color change is complete
const addColor = (time, element, color) => {
  return new Promise((resolve, reject) => {
    // Error handling - reject if element doesn't exist
    if (!element) {
      reject(new Error(`There is no such element ${element}`));
    }

    // Asynchronous operation using setTimeout
    setTimeout(() => {
      element.style.color = color; // Change element color
      resolve(); // Resolve promise when done
    }, time);
  });
};

// Event listener using Promise chaining instead of nested callbacks
btn.addEventListener("click", () => {
  addColor(1000, heading1, "red") // First promise
    .then(() => {
      return addColor(1000, heading2, "green"); // Chain second promise
    })
    .then(() => {
      return addColor(1000, heading3, "blue"); // Chain third promise
    })
    .then(() => {
      return addColor(1000, heading4, "purple"); // Chain fourth promise
    })
    .catch((err) => {
      console.error(err); // Handle any errors in the chain
    });
});
