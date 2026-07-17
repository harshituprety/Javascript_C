let containerEl = document.querySelector(".container");

for (let index = 0; index < 30; index++) {
  let colorContainerEl = document.createElement("div");
  colorContainerEl.classList.add("color-container");
  containerEl.appendChild(colorContainerEl);
}
let colorContainerEls = document.querySelectorAll(".color-container");

generateColor();

function generateColor() {
  colorContainerEls.forEach((colorContainerEl) => {
    const newColor = randomColor();
    colorContainerEl.style.backgroundColor = "#" + newColor;
    colorContainerEl.textContent = "#" + newColor;
  });
}

function randomColor() {
  let ch = "0123456789abcdef";
  let color = "";
  let colorCodeLen = 6;
  for (let index = 0; index < colorCodeLen; index++) {
    const randomNumber = Math.floor(Math.random() * ch.length);
    color += ch.substring(randomNumber, randomNumber + 1);
  }
  return color;
}
