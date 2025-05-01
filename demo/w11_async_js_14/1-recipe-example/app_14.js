function boilwater(time) {
  console.log("boiling ... ");
  for (let i = 0; i < time; i++) {
    console.log("still not done...");
  }
  console.log("done");
}
console.log("chop carrot");
boilwater(2000);
console.log("ADD CARROT");
boilwater(1000);
console.log("chop CARROT");
boilwater(1000);
console.log("ADD UNIT");
boilwater(1000);
console.log("all done.");
