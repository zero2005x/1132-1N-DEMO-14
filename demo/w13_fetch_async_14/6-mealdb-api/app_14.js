// Get reference to button element for triggering API calls
const btn = document.querySelector(".btn");

// External API endpoint for TheMealDB - searches for meals containing "Cheese"
// This demonstrates fetching data from a real external API
const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=Cheese";

// Global array to store meal data (currently unused in this example)
let persons = [];

// Event listener using async/await for button clicks
btn.addEventListener("click", async () => {
  // Call function to fetch meal data from external API
  getDataAsyncAwait(url);
});

// Async function to fetch data from TheMealDB API
// Demonstrates fetching from external API vs local files
const getDataAsyncAwait = async (url) => {
  try {
    // Fetch data from external API endpoint
    const response = await fetch(url);

    // Parse the JSON response
    const data = await response.json();

    // Log the meals array from the API response
    // TheMealDB API returns data in format: { meals: [...] }
    console.log("data.meals", data.meals);

    // Display the meals on the webpage
    displayItems(data.meals);
  } catch (error) {
    // Handle any network errors or parsing failures
    console.log("error", error);
  }
};

// Function to display meal data on the webpage
const displayItems = (data) => {
  // Transform meal objects into HTML paragraphs
  const dispalyData = data
    .map((item) => {
      // Extract meal name from each meal object
      // strMeal is the property name used by TheMealDB API
      return `<p> ${item.strMeal} </p>`;
    })
    .join(""); // Combine all paragraphs into single HTML string

  // Create container div element
  const element = document.createElement("div");

  // Set innerHTML to display all meal names
  element.innerHTML = dispalyData;

  // Add the div to the document body
  document.body.appendChild(element);
};
