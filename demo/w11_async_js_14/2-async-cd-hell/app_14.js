// Asynchronous function using nested callbacks - demonstrates "Callback Hell"
function boilwater(time) {
  console.log("boiling ... ");

  // First setTimeout - creates deeply nested callback structure
  setTimeout(() => {
    console.log("add carrot");
    console.log("boiling ... ");

    // Second level of nesting - getting harder to read
    setTimeout(() => {
      console.log("done");
      console.log("chop union");
      console.log("boiling ... ");

      // Third level of nesting - callback hell begins
      setTimeout(() => {
        console.log("done");
        console.log("add union");
        console.log("boiling ... ");

        // Fourth level of nesting - deeply nested and hard to maintain
        setTimeout(() => {
          console.log("done");
          console.log("all done");
        }, 1000);
      }, 1000);
    }, 1000);
  }, time);

  // This executes immediately, before any setTimeout callbacks
  console.log("done");
}

// These execute synchronously first
console.log("chop carrot");
boilwater(2000); // Starts async operation but doesn't block
