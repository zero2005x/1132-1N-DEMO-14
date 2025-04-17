const result1 = document.querySelector('.result1');
const result2 = document.querySelector('.result2');
const result3 = document.querySelector('.result3');
let h1 = 1.75,
  w1 = 55;
let h2 = 1.75,
  w2 = 70;
let h3 = 1.75,
  w3 = 85;

function bmiCalc_14(height, weight) {
  return (weight / height / height).toFixed(1);
}

function display(resultName, h, w) {
  resultName.innerHTML = `<p>BMI = ${bmiCalc_14(h, w)}, (h,w) =(${h},${w})</p>`;
}

display(result1, h1, w1);
display(result2, h2, w2);
display(result3, h3, w3);
