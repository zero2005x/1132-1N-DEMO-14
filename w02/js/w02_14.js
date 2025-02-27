const userInput = document.querySelector(".input-number");
const addBtn = document.querySelector(".btn-add");
const btnAdd = document.querySelector(".btn-add");
const btnSubtract = document.querySelector(".btn-subtract");
const btnMultiply = document.querySelector(".btn-multiply");
const btnDivide = document.querySelector(".btn-divide");
const currentResultOutput = document.querySelector(".current-result");
const currentCalculationOutput = document.querySelector(".current-calculation");

const defaultResult = 0;

let currentResult = defaultResult;
console.log("currentResult", currentResult);

function getUserInput() {
  return parseFloat(userInput.value);
}

function outputResult(result, text) {
  const roundedResult = Math.round(result * 100) / 100;
  currentResultOutput.textContent = roundedResult;
  currentCalculationOutput.textContent = text;
  console.log("currentResultOutput", currentResultOutput);
  console.log("currentCalculationOutput", currentCalculationOutput);
}

function compute(type) {
  const operand1 = parseFloat(currentResult);
  const operand2 = getUserInput();
  let calText = "";
  if (isNaN(operand1) || isNaN(operand2)) return;
  switch (type) {
    case "add":
      currentResult = (operand1 + operand2).toFixed(2);
      calText = `${operand1} + ${operand2} = ${currentResult}`;
      break;
    case "subtract":
      currentResult = (operand1 - operand2).toFixed(2);
      calText = `${operand1} - ${operand2} = ${currentResult}`;
      break;
    case "multiply":
      currentResult = (operand1 * operand2).toFixed(2);
      calText = `${operand1} * ${operand2} = ${currentResult}`;
      break;
    case "divide":
      if (operand2 !== 0) {
        currentResult = (operand1 / operand2).toFixed(2);
        calText = `${operand1} / ${operand2} = ${currentResult}`;
      } else {
        currentResultOutput.textContent = "Not defined";
        currentCalculationOutput.textContent = "Not defined";
      }
      break;
  }
  outputResult(currentResult, calText);
  console.log("calText", calText);
  console.log("currentResult", currentResult);
  console.log("operand1", operand1);
  console.log("operand2", operand2);
  console.log("currentResultOutput", currentResultOutput);
}

addBtn.addEventListener("click", () => compute("add"));
btnSubtract.addEventListener("click", () => compute("subtract"));
btnMultiply.addEventListener("click", () => compute("multiply"));
btnDivide.addEventListener("click", () => compute("divide"));
