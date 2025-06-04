// Create a new XMLHttpRequest object - the core of AJAX functionality
// This object allows us to make HTTP requests to servers asynchronously
const xhr = new XMLHttpRequest();
console.log("xhr0", xhr); // Log initial state of xhr object

// Configure the HTTP request
// Parameters: method (GET), URL (./api/sample.txt)
// This sets up the request but doesn't send it yet
xhr.open("GET", "./api/sample.txt");

console.log("xhr", xhr); // Log xhr object after opening (still not sent)

// Set up event handler for state changes
// This function will be called whenever the xhr.readyState property changes
xhr.onreadystatechange = () => {
  console.log("xhr", xhr); // Log xhr object at each state change

  // Check if request is complete (readyState 4) and successful (status 200)
  // readyState 4 = DONE (request finished and response is ready)
  // status 200 = OK (successful HTTP response)
  if (xhr.readyState === 4 && xhr.status === 200) {
    // Create a new paragraph element to display the fetched text
    const text = document.createElement("p");

    // Set the text content to the response from the server
    // xhr.responseText contains the actual data from the file
    text.textContent = xhr.responseText;

    // Add the paragraph to the document body
    document.body.appendChild(text);
  } else {
    // Log error information if request fails or is not yet complete
    console.log({
      status: xhr.status, // HTTP status code
      text: xhr.statusText, // HTTP status text (e.g., "OK", "Not Found")
    });
  }
};

// Actually send the HTTP request to the server
// This triggers the asynchronous operation
xhr.send();
