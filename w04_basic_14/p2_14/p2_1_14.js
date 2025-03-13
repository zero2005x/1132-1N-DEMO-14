import { sdata, sdata2 } from "./data_14.js";

const toSorted = sdata2.toSorted(function (a, b) {
  // sorted
  return b - a;
});
console.log("sdata", sdata);
console.log("sdata2", sdata2);
console.log("toSorted", toSorted);

let stat = {
  pass: 0,
  fail: 0,
  sum: 0,
  average: 0,
  highest: 0,
};

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
  <p> sdata to be sorted: </p>
  <p> ${JSON.stringify(s)}</p>
  <p>Total: ${s.length}</p>
  <p>Pass: ${stat.pass}</p>
  <p>Fail: ${stat.fail}</p>
  <p>Height: ${stat.highest}</p>
  <p>Lowerst: ${s[s.length - 1]}</p>
  <p>Average: ${stat.average.toFixed(1)}</p>
  <p> sdata length: ${s.length - 1} </p>`;
};

const computeStat = (s) => {
  s.forEach((score) => {
    stat.sum += score;
    if (score > stat.highest) {
      stat.highest = score;
    } else if (score < stat.lowest) {
      stat.lowest = score;
    }
    if (score >= 60) {
      stat.pass++;
    } else {
      stat.fail++;
    }
  });
  stat.average = stat.sum / s.length;
};
computeStat(toSorted);
outputStat1(toSorted);
