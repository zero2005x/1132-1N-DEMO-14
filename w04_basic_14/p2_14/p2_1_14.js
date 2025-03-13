import { sdata, sdata2 } from "./data_14.js";

console.log("sdata", sdata);

const result1 = document.querySelector(".result1");
const result2 = document.querySelector(".result2");

const computePass = (s) => {
  let pass = 0;
  s.forEach((score) => {
    if (score >= 60) {
      pass++;
    }
  });
  return pass;
};

const computeFail = (s) => {
  let fail = 0;
  s.forEach((score) => {
    if (score < 60) {
      fail++;
    }
  });
  return fail;
};

const getHighest = (s) => {
  let highest = s[0];
  s.forEach((score) => {
    if (score > highest) {
      highest = score;
    }
  });
  return highest;
};

const getLowest = (s) => {
  let lowest = s[0];
  s.forEach((score) => {
    if (score < lowest) {
      lowest = score;
    }
  });
  return lowest;
};

const getAverage = (s) => {
  let total = 0;
  s.forEach((score) => {
    total += score;
  });
  return total / s.length;
};

const outputStat1 = (s) => {
  result1.innerHTML = `<h3 class="my-4">Array Statistics</h3>
  <p> sdata original: </p>
  <p> ${JSON.stringify(s)}</p>
  <p>Total: ${s.length}</p>
  <p>Pass: ${computePass(s)}</p>
  <p>Fail: ${computeFail(s)}</p>
  <p>Height: ${getHighest(s)}</p>
  <p>Lowerst: ${getLowest(s)}</p>
  <p>Average: ${getAverage(s)}</p>
  <p> sdata length: ${s.length} </p>`;
};

outputStat1(sdata2);
