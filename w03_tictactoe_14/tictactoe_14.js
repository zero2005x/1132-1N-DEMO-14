const o = "o";
const x = "x";
let turn = 0;
let done = false;

const container = document.querySelector(".container");
const alertMessage = document.querySelector(".alertMessage");
const allLi = document.querySelectorAll(".board li");
const resetBtn = document.querySelector(".reset");

// console.log("allLi", allLi);

const checkWin = (player) => {
  let p = [];
  allLi.forEach((item) => {
    p.push(item.classList.contains(player));
  });
  // console.log(`p`, p);
  const [p1, p2, p3, p4, p5, p6, p7, p8, p9] = p;
  if (
    (p1 && p2 && p3) ||
    (p4 && p5 && p6) ||
    (p7 && p8 && p9) ||
    (p1 && p4 && p7) ||
    (p2 && p5 && p8) ||
    (p3 && p6 && p9) ||
    (p1 && p5 && p9) ||
    (p3 && p5 && p7)
  )
    return true;
  else return false;
};

const winMessage = (player) => {
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
};

const tieMessage = () => {
  container.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
  alertMessage.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
  alertMessage.style.color = "yellow";
  alertMessage.style.display = "block";
  alertMessage.textContent = "tie!";
};

// console.log(`checkWin("o")`, checkWin(o));
// console.log(`checkWin("x")`, checkWin(x));
// winMessage(o);
// winMessage(x);
// winMessage("tie");
// tieMessage();

const reset = () => {
  alertMessage.style.display = "none";
  container.style.backgroundColor = "#666";
  allLi.forEach((li) => {
    li.classList = "";
    li.textContent = "+";
  });
  turn = 0;
};

const go = (item, player, text) => {
  item.textContent = text;
  //item.classList = 'o';
  item.classList.add(player, "disabled");
  if (checkWin(player)) {
    winMessage(player);
    done = true;
    turn = 0;
  }
  if (checkDraw()) {
    tieMessage();
    done = true;
    turn = 0;
  }
};

allLi.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.classList.contains("disabled")) {
      alert("Already filled");
    } else {
      if (turn % 2 === 0) {
        go(item, "o", "0");
      } else if (turn % 2 == 1) {
        go(item, "x", "X");
      }

      if (!done && turn < 8) {
        turn++;
      } else if (!done && turn >= 8) {
        tieMessage();
        turn = 0;
      }
    }
  });
});

const checkDraw = () => {
  let draw = true;
  allLi.forEach((item) => {
    if (!item.classList.contains(o) && !item.classList.contains(x)) {
      draw = false;
    }
  });
  return draw;
};
const handleClick = (e) => {
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
  if (checkDraw()) {
    tieMessage();
    done = true;
  }
  turn++;
  e.target.classList.add("disabled");
};

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
