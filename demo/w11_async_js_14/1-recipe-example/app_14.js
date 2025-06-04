// Synchronous function that simulates boiling water
// This function blocks the main thread and executes sequentially
function boilwater(time) {
  console.log("boiling ... ");

  // Synchronous loop that blocks execution
  // This simulates a time-consuming operation but doesn't actually wait
  for (let i = 0; i < time; i++) {
    console.log("still not done...");
  }
  console.log("done");
}

// All these operations execute in strict sequential order
// Each boilwater call must complete before the next line executes
console.log("chop carrot");
boilwater(2000); // Blocks for 2000 iterations
console.log("ADD CARROT");
boilwater(1000); // Blocks for 1000 iterations
console.log("chop CARROT");
boilwater(1000); // Blocks for 1000 iterations
console.log("ADD UNIT");
boilwater(1000); // Blocks for 1000 iterations
console.log("all done.");
