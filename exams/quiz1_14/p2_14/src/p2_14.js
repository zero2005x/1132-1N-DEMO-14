import { data1 } from "./data_14.js";

// 提取溫度轉換函數
const celsiusToFahrenheit = (celsius) => (celsius * 9) / 5 + 32;

const result1 = document.querySelector(".result1");
const result2 = document.querySelector(".result2");

const updateResult = (temperatures, resultElement, title) => {
  const headingText = `<h3 class='mt-4'> Array Statistics for ${title} </h3>`;

  const resultText = temperatures
    .map((celsius) => `${celsius}°C = ${celsiusToFahrenheit(celsius)}°F <br />`)
    .join("");

  resultElement.innerHTML = headingText + resultText;
};

updateResult(data1, result1, "result1");

data1.push(64, 73, 82);
updateResult(data1, result2, "result2");
