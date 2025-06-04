// Wait for DOM to be fully loaded before setting up event listeners
// This ensures all HTML elements are available for manipulation
document.addEventListener("DOMContentLoaded", () => {
  // Get reference to the button element
  const button = document.querySelector(".btn");

  // Add click event listener that triggers the fetchData function
  button.addEventListener("click", fetchData);
});

// Asynchronous function to fetch text data using XMLHttpRequest
// This demonstrates the traditional AJAX approach before fetch() API
const fetchData = async () => {
  // Create new XMLHttpRequest object for making HTTP requests
  const xhr = new XMLHttpRequest();
  console.log("xhr0", xhr); // Log initial state (readyState: 0 - UNSENT)

  // Configure GET request to fetch the Chinese text file
  // Parameters: method, URL, async (default true)
  xhr.open("GET", "./api/sample.txt");

  console.log("xhr", xhr); // Log after opening (readyState: 1 - OPENED)

  // Event handler that fires whenever readyState changes
  // This is the core of AJAX - handling asynchronous state changes
  xhr.onreadystatechange = () => {
    console.log("xhr", xhr); // Log xhr object at each state change

    // Check for successful completion:
    // readyState 4 = DONE (operation complete)
    // status 200 = OK (successful HTTP response)
    if (xhr.readyState === 4 && xhr.status === 200) {
      // Create paragraph element to display the fetched text
      const text = document.createElement("p");

      // Set text content to the Chinese AJAX description from the file
      text.textContent = xhr.responseText;

      // Add the paragraph to the document body
      document.body.appendChild(text);
    } else {
      // Log status information for debugging purposes
      console.log({
        status: xhr.status, // HTTP status code
        text: xhr.statusText, // HTTP status message
      });
    }
  };

  // Actually send the HTTP request to the server
  // This triggers the asynchronous operation
  xhr.send();
};
