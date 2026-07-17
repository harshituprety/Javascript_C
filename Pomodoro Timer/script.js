let startEl = document.querySelector("#start");
let stopEl = document.querySelector("#stop");
let resetEl = document.querySelector("#reset");
let timerEl = document.querySelector("#timer");

let count;
let timeLeft = 10;

function updateTimer() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  timerEl.innerHTML = formattedTime;
}

function startTimer() {
  count = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft <= 0) {
      clearInterval(count);
      count = null;
      alert("Time's Up!");
      timeLeft = 1500;
      updateTimer();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(count);
}

function resetTimer() {
  // clearInterval(count);
  updateTimer();
  timeLeft = 1500;
}

startEl.addEventListener("click", startTimer);
stopEl.addEventListener("click", stopTimer);
resetEl.addEventListener("click", resetTimer);

// let x = null;
// console.log(x);
// console.log(typeof x);
