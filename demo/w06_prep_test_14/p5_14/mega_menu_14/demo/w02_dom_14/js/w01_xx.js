const userInput = document.querySelector('.input-number');
const addBtn = document.querySelector('.btn-add');
const subtractBtn = document.querySelector('.btn-subtract');
const multiplyBtn = document.querySelector('.btn-multiply');
const divideBtn = document.querySelector('.btn-divide');

const currentResultOutput = document.querySelector('.current-result');
const currentCalculationOutput = document.querySelector('.current-calculation');

const defaultResult = 0;
let currentResult = defaultResult;

// console.log('userInput', userInput);
// console.log('addBtn', addBtn);
// console.log('currentResultOutput', currentResultOutput);

function getUserInput() {
  return parseFloat(userInput.value);
}

function outputResult(result, text) {
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
  console.log(text);
}

function compute(type) {
  let calText;
  let result = 0;
  const operand1 = parseFloat(currentResult);
  const operand2 = getUserInput();
  switch (type) {
    case 'add':
      result = operand1 + operand2;
      calText = `${operand1} + ${operand2} = ${result}`;
      break;
    case 'subtract':
      result = operand1 - operand2;
      calText = `${operand1} - ${operand2} = ${result}`;
      break;
    case 'multiply':
      result = operand1 * operand2;
      calText = `${operand1} * ${operand2} = ${result}`;
      break;
    case 'divide':
      if (operand2 === 0) alert('cannot divide by 0');
      else {
        result = (operand1 / operand2).toFixed(2);
        calText = `${operand1} / ${operand2} = ${result}`;
        break;
      }
  }
  currentResult = result;
  outputResult(currentResult, calText);
}
addBtn.addEventListener('click', () => compute('add'));
subtractBtn.addEventListener('click', () => compute('subtract'));
multiplyBtn.addEventListener('click', () => compute('multiply'));
divideBtn.addEventListener('click', () => compute('divide'));
