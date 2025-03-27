let c, f;

c = Number(prompt("Enter the temperature in Celsius:")).toFixed(2);
console.log(`The temperature in Celsius is ${c}°C`);
f = ((c * 9) / 5 + 32).toFixed(2);
console.log(`The temperature in Fahrenheit is ${f}°F`);
const output = `${c}°C is ${f}°F`;
let result = document.querySelector(".result");
result.textContent = output;
