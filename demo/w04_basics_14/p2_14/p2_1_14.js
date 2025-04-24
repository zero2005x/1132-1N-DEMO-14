import { sdata2 } from "./data_14.js";

const sortedDesc = sdata2.toSorted((a, b) => b - a);

const stats = sortedDesc.reduce(
  (acc, score) => {
    acc.sum += score;
    acc.pass += score >= 60 ? 1 : 0;
    acc.fail += score < 60 ? 1 : 0;
    acc.highest = Math.max(acc.highest, score);
    acc.lowest = Math.min(acc.lowest, score);
    return acc;
  },
  {
    sum: 0,
    pass: 0,
    fail: 0,
    highest: sortedDesc[0],
    lowest: sortedDesc[0],
  }
);
stats.average = stats.sum / sortedDesc.length;

document.querySelector(".result1").innerHTML = `
<h3 class="my-4">Array Statistics</h3>
<p>Original data: [${sdata2.join(", ")}]</p>
<p>After sorting (from large to small): [${sortedDesc.join(", ")}]</p>
<p>Total number of records: ${sortedDesc.length}</p>
<p>Pass: ${stats.pass}</p>
<p>Fail: ${stats.fail}</p>
<p>Highest score: ${stats.highest}</p>
<p>Lowest score: ${stats.lowest}</p>
<p>Average: ${stats.average.toFixed(1)}</p>
`;
