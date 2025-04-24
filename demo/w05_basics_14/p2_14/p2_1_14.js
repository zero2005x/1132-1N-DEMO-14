import { sdata, sdata2 } from "./data_14.js";

// 1. Sort a copy of sdata2 descending
const sortedScores = [...sdata2].sort((a, b) => b - a);

// 2. Compute all stats in one pass
function computeStatistics(scores) {
  const initial = {
    sum: 0,
    pass: 0,
    fail: 0,
    max: -Infinity,
    min: Infinity,
  };

  const stats = scores.reduce((acc, score) => {
    acc.sum += score;
    acc.pass += score >= 60 ? 1 : 0;
    acc.fail += score < 60 ? 1 : 0;
    acc.max = Math.max(acc.max, score);
    acc.min = Math.min(acc.min, score);
    return acc;
  }, initial);

  return {
    ...stats,
    average: stats.sum / scores.length,
  };
}

const stats = computeStatistics(sortedScores);

// 3. Render HTML
function renderStats(
  containerSelector,
  scores,
  { sum, pass, fail, max, min, average }
) {
  document.querySelector(containerSelector).innerHTML = `
    <h3 class="my-4">Array Statistics</h3>
    <p>Scores: ${JSON.stringify(scores)}</p>
    <p>Total:   ${scores.length}</p>
    <p>Pass:    ${pass}</p>
    <p>Fail:    ${fail}</p>
    <p>Highest: ${max}</p>
    <p>Lowest:  ${min}</p>
    <p>Average: ${average.toFixed(1)}</p>
  `;
}

renderStats(".result1", sortedScores, stats);

// Optional: log for debugging
console.log({ sdata, sdata2, sortedScores, stats });
