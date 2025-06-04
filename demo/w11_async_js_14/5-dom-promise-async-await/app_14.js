// DOM element selection - same as previous examples
const heading1 = document.querySelector(".one");
const heading2 = document.querySelector(".two");
const heading3 = document.querySelector(".three");
const heading4 = document.querySelector(".four");

const btn = document.querySelector(".btn");

// Same Promise-based function as in the previous example
// Encapsulates asynchronous color changing logic
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

// Async function using modern async/await syntax
// Much cleaner and more readable than Promise chains
const changeColor = async () => {
  try {
    // await pauses execution until each Promise resolves
    await addColor(1000, heading1, "red"); // Wait for red
    await addColor(1000, heading2, "green"); // Then wait for green
    await addColor(1000, heading3, "blue"); // Then wait for blue
    await addColor(1000, heading4, "purple"); // Finally wait for purple
  } catch (err) {
    // Catch any errors from the async operations
    console.error(err);
  }
};

// Event listener using async/await
btn.addEventListener("click", async () => {
  const result = await changeColor(); // Wait for all color changes to complete
  console.log(`result`, result); // Log the result (will be undefined)
});
