// DOM element selection - getting references to HTML elements
const heading1 = document.querySelector(".one"); // Select first heading
const heading2 = document.querySelector(".two"); // Select second heading
const heading3 = document.querySelector(".three"); // Select third heading
const heading4 = document.querySelector(".four"); // Select fourth heading

const btn = document.querySelector(".btn"); // Select the button element

// Event listener with nested setTimeout callbacks (Callback Hell in DOM context)
btn.addEventListener("click", () => {
  // First timeout - change first heading to red after 1 second
  setTimeout(() => {
    heading1.style.color = "red";

    // Second timeout - change second heading to green after 2 more seconds
    setTimeout(() => {
      heading2.style.color = "green";

      // Third timeout - change third heading to blue after 1 more second
      setTimeout(() => {
        heading3.style.color = "blue";

        // Fourth timeout - change fourth heading to purple after 0.5 seconds
        setTimeout(() => {
          heading4.style.color = "purple";
        }, 500);
      }, 1000);
    }, 2000);
  }, 1000);
});
