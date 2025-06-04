// Get reference to the button element for triggering the fetch operation
const btn = document.querySelector(".btn");

// Define the URL for the JSON data file
const url = "./api/person.json";

// Add click event listener to the button
// When clicked, it will fetch and display JSON data
btn.addEventListener("click", () => {
  fetchData(url); // Call fetchData function with the JSON file URL
});

// Function to fetch and process JSON data from a specified URL
const fetchData = (url) => {
  // Create new XMLHttpRequest object for AJAX functionality
  const xhr = new XMLHttpRequest();
  console.log("xhr0", xhr); // Log initial state

  // Configure GET request to fetch JSON data
  xhr.open("GET", url);
  console.log("xhr", xhr); // Log after opening request

  // Event handler for monitoring request state changes
  xhr.onreadystatechange = () => {
    console.log("xhr", xhr); // Log xhr object at each state change

    // Check for successful request completion
    if (xhr.readyState === 4 && xhr.status === 200) {
      // Parse the JSON response text into a JavaScript object/array
      const data = JSON.parse(xhr.responseText);
      console.log("data", data); // Log the parsed data

      // Transform the data array into HTML string using map and join
      const displayData = data
        .map((item) => {
          // Destructure id and name from each person object
          const { id, name } = item;

          // Return HTML paragraph for each person
          // Note: id is destructured but not used in the return
          return `<p>${name}</p>`;
        })
        .join(""); // Join all paragraphs into a single string

      console.log("displayData", displayData); // Log the HTML string

      // Create a new div element to contain the data
      const createElement = document.createElement("div");

      // Add CSS class for styling purposes
      createElement.classList.add("data");

      // Set the innerHTML to the generated HTML string
      createElement.innerHTML = displayData;

      // Append the div with all person data to the document body
      document.body.appendChild(createElement);
    } else {
      // Log error information for debugging failed requests
      console.log({
        status: xhr.status, // HTTP status code
        text: xhr.statusText, // HTTP status message
      });
    }
  };

  // Send the HTTP request to fetch the JSON data
  xhr.send();
};
