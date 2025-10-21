let textEl = document.querySelector("#text");
let speedEl = document.querySelector("#spd");
let text = "Developer";
let speed = 300 / speedEl.value;
let i = 1;

writeText();

function writeText() {
  textEl.innerText = text.slice(0, i);

  i++;

  if (i > text.length) {
    i = 1;
  }

  setTimeout(writeText, speed);
}

speedEl.addEventListener("input", (e) => (speed = 300 / e.target.value));
