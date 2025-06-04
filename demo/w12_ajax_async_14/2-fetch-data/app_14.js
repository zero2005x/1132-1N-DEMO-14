// Wait for the DOM to be fully loaded before setting up event listeners
// This ensures all HTML elements are available for manipulation
document.addEventListener("DOMContentLoaded", () => {
  // Find the button element in the DOM
  const button = document.querySelector(".btn");

  // Add click event listener to the button
  // When clicked, it will call the fetchData function
  button.addEventListener("click", fetchData);
});

// Asynchronous function to fetch data from a local file
// Uses XMLHttpRequest to demonstrate AJAX functionality
const fetchData = async () => {
  // Create new XMLHttpRequest instance
  const xhr = new XMLHttpRequest();
  console.log("xhr0", xhr); // Log initial state

  // Configure GET request to fetch the sample text file
  xhr.open("GET", "./api/sample.txt");

  console.log("xhr", xhr); // Log after opening request

  // Event handler for state changes during the request lifecycle
  xhr.onreadystatechange = () => {
    console.log("xhr", xhr); // Log xhr object at each state change

    // Check for successful completion
    // readyState 4 = request finished, status 200 = success
    if (xhr.readyState === 4 && xhr.status === 200) {
      // Create paragraph element to display the fetched content
      const text = document.createElement("p");

      // Set the text content from the server response
      text.textContent = xhr.responseText;

      // Append the new paragraph to the document body
      document.body.appendChild(text);
    } else {
      // Log status information for debugging
      console.log({
        status: xhr.status, // HTTP status code
        text: xhr.statusText, // Status message
      });
    }
  };

  // Send the request to the server
  xhr.send();
};
