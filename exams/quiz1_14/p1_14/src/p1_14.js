function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

let c1 = 19;
let c2 = 28;
let f1 = celsiusToFahrenheit(c1);
let f2 = celsiusToFahrenheit(c2);

const result1 = document.querySelector(".result1");
const result2 = document.querySelector(".result2");

result1.textContent = `${c1}°C = ${f1}°F`;
result2.textContent = `${c2}°C = ${f2}°F`;
