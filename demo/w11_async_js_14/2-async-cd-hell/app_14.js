function boilwater(time) {
  console.log("boiling ... ");
  setTimeout(() => {
    console.log("add carrot");
    console.log("boiling ... ");
    setTimeout(() => {
      console.log("done");
      console.log("chop union");
      console.log("boiling ... ");
      setTimeout(() => {
        console.log("done");
        console.log("add union");
        console.log("boiling ... ");
        setTimeout(() => {
          console.log("done");
          console.log("all done");
        }, 1000);
      }, 1000);
    }, 1000);
  }, time);

  console.log("done");
}

console.log("chop carrot");
boilwater(2000);
