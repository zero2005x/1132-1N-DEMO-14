const o = "o";
const x = "x";
let turn = 0;
let done = false;

const container = document.querySelector(".container");
const alert = document.querySelector(".alert");
const allLi = document.querySelectorAll(".board li");
const resetBtn = document.querySelector(".reset");

const winMessage = (player) => {
  if (player === o) {
    container.style.backgroundColor = "rgba(144, 238, 144, 0.5)";
    alert.style.backgroundColor = "rgba(144, 238, 144, 0.5)";
    alert.style.color = "black";
    alert.style.display = "block";
    alert.textContent = "Player O wins!";
  } else if (player === x) {
    container.style.backgroundColor = "rgba(240, 118, 128, 0.726)";
    alert.style.backgroundColor = "rgba(240, 118, 128, 0.726)";
    alert.style.color = "purple";
    alert.style.display = "block";
    alert.textContent = "Player X wins!";
  }
};

const tieMessage = () => {
  container.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
  alert.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
  alert.style.color = "yellow";
  alert.style.display = "block";
  alert.textContent = "tie!";
};

winMessage(o);
// winMessage(x);
// winMessage("tie");
// tieMessage();

const reset = () => {
  alert.style.display = "none";
  container.style.backgroundColor = "#666";
  allLi.forEach((li) => {
    li.classList = "";
    li.textContent = "+";
  });
};

const checkWin = () => {};
const checkDraw = () => {};
const handleClick = (e) => {};

resetBtn.addEventListener("click", reset);
