// Get reference to button element for user interaction
const btn = document.querySelector(".btn");

// URL for local JSON data file containing person information
const url = "./api/person.json";

// Global array to store person data
let persons = [];

// Event listener using async/await syntax for cleaner asynchronous code
btn.addEventListener("click", async () => {
  // Call the async function and wait for completion
  getDataAsyncAwait(url);
});

// Modern async/await approach for handling asynchronous operations
// This is the most readable and maintainable approach
const getDataAsyncAwait = async (url) => {
  try {
    // await pauses execution until the Promise resolves
    const response = await fetch(url); // Wait for fetch to complete
    const data = await response.json(); // Wait for JSON parsing to complete

    console.log("data", data); // Log the parsed data
    console.log("response", response); // Log response metadata

    // Display the data on the page
    displayItems(data);

    console.log("data", data); // Log data again for debugging
    return data; // Return the data for potential use
  } catch (error) {
    // Catch and log any errors that occur during the async operations
    console.log("error", error);
  }
};

// Promise-based fetch API with .then() chaining (older but still valid approach)
const getDataByFetchAPI = (url) => {
  fetch(url)
    .then((response) => {
      console.log("response", response); // Log Response object

      // Return the JSON promise to continue the chain
      return response.json();
    })
    .then((data) => {
      console.log("data", data); // Log parsed data
      displayItems(data); // Display data on page
    })
    .catch((err) => console.log(err)); // Handle errors
};

// Simplified Promise-based approach with direct method chaining
const getDataByFetchAPI2 = (url) => {
  fetch(url)
    .then((response) => response.json()) // Convert to JSON in one step
    .then((data) => {
      persons = data; // Store in global variable
      console.log("data", data);
      displayItems(data); // Display on page
    })
    .catch((err) => console.log(err));
};

// Function to create HTML elements from person data
const displayItems = (persons) => {
  // Transform person objects into HTML paragraphs
  const dispalyData = persons
    .map((person) => {
      // Create formatted string for each person
      return ` <p>${person.id} : ${person.name}</p>`;
    })
    .join(""); // Combine all paragraphs into single string

  // Create container element
  const element = document.createElement("div");

  // Set the innerHTML to display all person data
  element.innerHTML = dispalyData;

  // Add to document body
  document.body.appendChild(element);
};

// XMLHttpRequest approach for comparison with modern methods
const getDataByXHR = () => {
  const xhr = new XMLHttpRequest();

  // Configure the request
  xhr.open("GET", url, true);

  // Handle state changes
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // Parse JSON manually
      const data = JSON.parse(xhr.responseText);
      console.log("data", data);

      // Store in global variable
      persons = data;
    }
  };

  // Send the request
  xhr.send();
};
