const calculateBtn = document.querySelector('.calculate');
const bmiResult = document.querySelector('.show-result');
const suggest = document.querySelector('.give-suggestion');

function bmiCalc_14(height, weight) {
  // Check for valid height and weight to avoid division by zero or NaN results
  if (height <= 0 || weight <= 0 || isNaN(height) || isNaN(weight)) {
    return null; // Return null or handle error appropriately
  }
  return (weight / (height * height)).toFixed(1); // Calculate BMI and round to one decimal place
}

function bmi_normal_low(height) {
  return height * height * 18.5;
}

function bmi_normal_high(height) {
  return height * height * 24;
}

function calculateBMI() {
  const weightInput = document.querySelector('.weight');
  const heightInput = document.querySelector('.height');
  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value) / 100;

  // Validate inputs
  if (isNaN(weight) || weight <= 0 || isNaN(height) || height <= 0) {
    bmiResult.innerHTML = 'Please enter valid height and weight.';
    suggest.innerHTML = '';
    return;
  }

  const bmi = bmiCalc_14(height, weight);

  let suggestion;
  let way;
  if (bmi === null) {
    bmiResult.innerHTML = 'Could not calculate BMI.';
    suggest.innerHTML = '';
    return;
  } else if (bmi < 18.5) {
    suggestion = `Underweight.`;
    way = `add at least ${bmi_normal_low(height) - weight} Kg to normal.`;
  } else if (bmi >= 18.5 && bmi <= 24) {
    suggestion = 'Normal.';
    way = '';
  } else {
    suggestion = `Overweight.`;
    way = `reduce at least ${
      weight - bmi_normal_high(height)
    } Kg to to normal.`;
  }

  bmiResult.innerHTML = `Your BMI is ${bmi}. ${suggestion}`;
  suggest.innerHTML = `${way}`;
}

calculateBtn.addEventListener('click', calculateBMI);
