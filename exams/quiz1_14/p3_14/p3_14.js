const imagePaths = {
  1: "./images/TKU1.png",
  2: "./images/TKU2.png",
  3: "./images/TKU3.png",
  4: "./images/TKU4.png",
  5: "./images/TKU5.png",
};

function changeImage(index) {
  const player = document.querySelector(".player");
  const imagePath = imagePaths[index];
  if (imagePath) {
    player.innerHTML = `<img src="${imagePath}" style="width:100%; height: auto" />`;
  }
}

function showTKU60() {
  const p = document.querySelector(".menu1");
  p.innerHTML = `
    <ul>
      <li><a href="#" data-index="1">淡江大戲 1</a></li>
      <li><a href="#" data-index="2">淡江大戲 2</a></li>
      <li><a href="#" data-index="3">淡江大戲 3</a></li>
      <li><a href="#" data-index="4">淡江大戲 4</a></li>
      <li><a href="#" data-index="5">淡江大戲 5</a></li>
    </ul>
  `;
  const links = p.querySelectorAll("a");
  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // 阻止連結的預設行為
      const index = this.dataset.index;
      changeImage(parseInt(index));
    });
  });
}

function clearMenu1All() {
  const p = document.querySelector(".menu1");
  p.innerHTML = ``;
}
