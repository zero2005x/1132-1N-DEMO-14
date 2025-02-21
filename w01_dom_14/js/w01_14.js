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
  if (userInput.value === "") {
    return 0;
  } else {
    return parseFloat(userInput.value);
  }
}

function outputResult(result, text) {
  const roundedResult = parseFloat(result.toFixed(2)); // Round to 2 decimal places
  currentResultOutput.textContent = roundedResult;
  currentCalculationOutput.textContent = text;
}

console.log("getUserInput()", getUserInput());

function add() {
  const operand1 = currentResult;
  const operand2 = getUserInput();
  if (isNaN(operand1) || isNaN(operand2)) return;
  currentResult = operand1 + operand2;

  const calText = `${operand1} + ${operand2}`;

  outputResult(currentResult, calText);
  console.log("calText", calText);

  console.log("currentResultOutput", currentResultOutput);
}

addBtn.addEventListener("click", add);

function subtract() {
  const operand1 = currentResult;
  const operand2 = getUserInput();
  if (isNaN(operand1) || isNaN(operand2)) return;
  currentResult = operand1 - operand2;

  const calText = `${operand1} - ${operand2}`;

  outputResult(currentResult, calText);
  console.log("calText", calText);

  console.log("currentResultOutput", currentResultOutput);
}




btnSubtract.addEventListener("click", subtract);


function multiply() {
  const operand1 = currentResult;
  const operand2 = getUserInput();
  if (isNaN(operand1) || isNaN(operand2)) return;
  currentResult = operand1 * operand2;

  const calText = `${operand1} * ${operand2}`;
  outputResult(currentResult, calText);

  console.log("calText", calText);

  console.log("currentResultOutput", currentResultOutput);
}

btnMultiply.addEventListener("click", multiply);


function divide() {
  const operand1 = currentResult;
  const operand2 = getUserInput();
  if (isNaN(operand1) || isNaN(operand2)) return;
  if (operand2 !== 0) {
    currentResult = operand1 / operand2;

    const calText = `${operand1} / ${operand2}`;

    outputResult(currentResult, calText);
    console.log("calText", calText);

    console.log("currentResultOutput", currentResultOutput);
  } else {
    currentResultOutput.textContent = "Not defined";
    currentCalculationOutput.textContent = "Not defined";
  }
}

btnDivide.addEventListener("click", divide);
