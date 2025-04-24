import { students } from "./data_14.js";

// Compute stats for an array of { score } objects
function computeStats(items) {
  const scores = items.map((s) => s.score);
  const total = scores.length;
  const sum = scores.reduce((acc, n) => acc + n, 0);
  const pass = scores.filter((n) => n >= 60).length;
  const fail = total - pass;
  const max = Math.max(...scores);
  const min = Math.min(...scores);
  const avg = sum / total;

  return { total, sum, pass, fail, max, min, average: avg };
}

// Render to a given container
function render(container, items, title) {
  const { total, pass, fail, max, min, average } = computeStats(items);

  document.querySelector(container).innerHTML = `
    <h3 class="my-4">Array Statistics (${title})</h3>
    <p>Data: ${JSON.stringify(items)}</p>
    <p>Total:   ${total}</p>
    <p>Pass:    ${pass}</p>
    <p>Fail:    ${fail}</p>
    <p>Highest: ${max}</p>
    <p>Lowest:  ${min}</p>
    <p>Average: ${average.toFixed(2)}</p>
  `;
}

const sortedStudents = [...students].sort((a, b) => b.score - a.score);

render(".result1", students, "Original Order");
render(".result2", sortedStudents, "Descending Order");
