const o = "o";
const x = "x";
let turn = 0;
let done = false;

const container = document.querySelector(".container");
const alertMessage = document.querySelector(".alertMessage");
const board = document.querySelector(".board");
const resetBtn = document.querySelector(".reset");

// Add click event listeners to each cell
function addAllClickListeners() {
  const allLi = document.querySelectorAll(".board li");
  allLi.forEach((item) => {
    item.addEventListener("click", handleClick);
  });
}

// Check win condition for a player
function checkWin(player) {
  const allLi = document.querySelectorAll(".board li");
  let p = [];
  allLi.forEach((item) => {
    p.push(item.classList.contains(player));
  });
  const [p1, p2, p3, p4, p5, p6, p7, p8, p9] = p;
  return (
    (p1 && p2 && p3) ||
    (p4 && p5 && p6) ||
    (p7 && p8 && p9) ||
    (p1 && p4 && p7) ||
    (p2 && p5 && p8) ||
    (p3 && p6 && p9) ||
    (p1 && p5 && p9) ||
    (p3 && p5 && p7)
  );
}

// Show win message
function winMessage(player) {
  if (player === o) {
    container.style.backgroundColor = "rgba(144, 238, 144, 0.5)";
    alertMessage.style.backgroundColor = "rgba(144, 238, 144, 0.5)";
    alertMessage.style.color = "black";
    alertMessage.style.display = "block";
    alertMessage.textContent = "Player O wins!";
  } else if (player === x) {
    container.style.backgroundColor = "rgba(240, 118, 128, 0.726)";
    alertMessage.style.backgroundColor = "rgba(240, 118, 128, 0.726)";
    alertMessage.style.color = "purple";
    alertMessage.style.display = "block";
    alertMessage.textContent = "Player X wins!";
  }
}

// Show tie message
function tieMessage() {
  container.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
  alertMessage.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
  alertMessage.style.color = "yellow";
  alertMessage.style.display = "block";
  alertMessage.textContent = "tie!";
}

// Reset the game state and UI
function reset() {
  // Clear the board HTML and recreate cells
  board.innerHTML = "";
  for (let i = 0; i < 9; i++) {
    const li = document.createElement("li");
    li.textContent = "+";
    board.appendChild(li);
  }
  alertMessage.style.display = "none";
  container.style.backgroundColor = "#666";
  turn = 0;
  done = false;
  addAllClickListeners(); // Add listeners again
}

// Check if the board is full and it's a draw
function checkDraw() {
  const allLi = document.querySelectorAll(".board li");
  let draw = true;
  allLi.forEach((item) => {
    if (!item.classList.contains(o) && !item.classList.contains(x)) {
      draw = false;
    }
  });
  return draw;
}

// Handle click event for each cell
function handleClick(e) {
  if (done) return;
  if (e.target.classList.contains("disabled")) return;
  if (turn % 2 === 0) {
    e.target.classList.add(o);
    e.target.textContent = o;
    if (checkWin(o)) {
      winMessage(o);
      done = true;
    }
  } else {
    e.target.classList.add(x);
    e.target.textContent = x;
    if (checkWin(x)) {
      winMessage(x);
      done = true;
    }
  }
  if (checkDraw() && !done) {
    tieMessage();
    done = true;
  }
  turn++;
  e.target.classList.add("disabled");
}

// Initial setup: add click listeners to all cells
addAllClickListeners();

// Reset button event
resetBtn.addEventListener("click", reset);

/*
      <ul class="board">
        <li>+</li>
        <li>+</li>
        <li>+</li>
        <li>+</li>
        <li>+</li>
        <li>+</li>
        <li>+</li>
        <li>+</li>
        <li>+</li>
      </ul>

      player o win
      <ul class="board">
        <li class="o disabled">o</li>
        <li>+</li>
        <li class="x">x</li>
        <li class="o">o</li>
        <li class="x">x</li>
        <li class="x">x</li>
        <li class="o">o</li>
        <li>+</li>
        <li class="o">o</li>
      </ul>

      player x win
      <ul class="board">
      <li class="o">o</li>
        <li>+</li>
        <li class="x">x</li>
        <li class="o">o</li>
        <li class="x">x</li>
        <li>+</li>
        <li class="x">x</li>
        <li>+</li>
        <li class="o">o</li>
      </ul>

      tie
      <ul class="board">
        <li class="o">o</li>
        <li class="x">x</li>
        <li class="o">o</li>
        <li class="o">o</li>
        <li class="o">o</li>
        <li class="x">x</li>
        <li class="x">x</li>
        <li class="o">o</li>
        <li class="x">x</li>
      </ul>
*/
