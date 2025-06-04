// Get reference to the button element for user interaction
const btn = document.querySelector(".btn");

// Define the URL for the local JSON data file
const url = "./api/person.json";

// Global array to store fetched person data
let persons = [];

// Add click event listener with async/await pattern
btn.addEventListener("click", async () => {
  // Fetch data and store the result in the global persons array
  persons = await getDataByFetchAPI2(url);
});

// Fetch API approach with detailed response handling
// This is the modern alternative to XMLHttpRequest
const getDataByFetchAPI = (url) => {
  fetch(url) // Returns a Promise that resolves to Response object
    .then((response) => {
      console.log("response", response); // Log Response object metadata

      // Convert Response object to JSON
      // response.json() also returns a Promise
      return response.json();
    })
    .then((data) => {
      console.log("data", data); // Log the parsed JSON data
      displayItems(data); // Display the data on the page
    })
    .catch((err) => console.log(err)); // Handle any errors in the chain
};

// Simplified fetch API approach with method chaining
// More concise version of the above function
const getDataByFetchAPI2 = (url) => {
  fetch(url)
    .then((response) => response.json()) // Chain response.json() directly
    .then((data) => {
      console.log("data", data); // Log the JSON data
      displayItems(data); // Display data on the page
    })
    .catch((err) => console.log(err)); // Error handling
};

// Function to dynamically create HTML elements from person data
const displayItems = (persons) => {
  // Transform array of person objects into HTML string
  const dispalyData = persons
    .map((person) => {
      // Create paragraph for each person showing ID and name
      return ` <p>${person.id} : ${person.name}</p>`;
    })
    .join(""); // Join all paragraphs into single HTML string

  // Create container div element
  const element = document.createElement("div");

  // Set the innerHTML to the generated HTML string
  element.innerHTML = dispalyData;

  // Add the div with all person data to the document body
  document.body.appendChild(element);
};

// Traditional XMLHttpRequest approach for comparison
// Shows the older way of making AJAX requests
const getDataByXHR = () => {
  const xhr = new XMLHttpRequest();

  // Configure GET request with async=true (third parameter)
  xhr.open("GET", url, true);

  // Event handler for state changes
  xhr.onreadystatechange = function () {
    // Check for successful completion
    if (xhr.readyState === 4 && xhr.status === 200) {
      // Manually parse JSON response text
      const data = JSON.parse(xhr.responseText);
      console.log("data", data);

      // Store data in global variable
      persons = data;
    }
  };

  // Send the request
  xhr.send();
};
