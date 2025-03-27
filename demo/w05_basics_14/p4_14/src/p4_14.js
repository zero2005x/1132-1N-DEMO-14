import { students } from "./data_14.js";

let stat = {
  pass: 0,
  fail: 0,
  sum: 0,
  average: 0,
  highest: -100,
  lowest: 200,
};
const result1 = document.querySelector(".result1");
const result2 = document.querySelector(".result2");

const resetStat = () => {
  stat.pass = 0;
  stat.fail = 0;
  stat.sum = 0;
  stat.average = 0;
  stat.highest = -100;
  stat.lowest = 200;
};

const getHighest = (s) => {
  let highest = -100;
  s.forEach((item) => {
    if (item.score > stat.highest) {
      stat.highest = item.score;
    }
  });
  return stat.highest;
};

const getLowest = (s) => {
  let lowest = s[0];
  s.forEach((item) => {
    if (item.score < stat.lowest) {
      stat.lowest = item.score;
    }
  });
  return stat.lowest;
};

const getAverage = (s) => {
  let total = 0;
  s.forEach((score) => {
    total += score;
  });
  return total / s.length;
};

const computeStat = (s) => {
  resetStat();
  s.forEach((item) => {
    stat.sum += item.score;
    if (item.score > stat.highest) {
      stat.highest = item.score;
    } else if (item.score < stat.lowest) {
      stat.lowest = item.score;
    }
    if (item.score >= 60) {
      stat.pass++;
    } else {
      stat.fail++;
    }
  });

  stat.average = stat.sum / (s.length - 1);
};

const toSorted = students.toSorted(function (a, b) {
  // sorted
  return b.score - a.score;
});

const outputStat = (s, isSort, result) => {
  const resultText = `<h3 class="my-4">Array Statistics for ${
    result === "result1" ? "result1" : "result2"
  }</h3>
  <p>After sorting descending: </p>
  <p> ${JSON.stringify(s)}</p>
  <p>Total: ${s.length}</p>
  <p>Pass: ${stat.pass}</p>
  <p>Fail: ${stat.fail}</p>
  <p>Height: ${isSort === true ? s[0].score : getHighest(s)}</p>
  <p>Lowest: ${isSort === true ? s[s.length - 1].score : getLowest(s)}</p>
  <p>Average: ${stat.average.toFixed(2)}</p>
  `;

  if (result === "result1") {
    result1.innerHTML = resultText;
  } else if (result === "result2") {
    result2.innerHTML = resultText;
  }
};

console.log("students", students);
console.log("toSorted", toSorted);

computeStat(students);

outputStat(students, false, "result1");

computeStat(toSorted);
outputStat(toSorted, true, "result2");
