let i = 0;

function inBtn() {
  i++;
  document.getElementById("zero").innerHTML = i;
  if (i > 0) {
    if (i % 2 == 0) {
      document.getElementById("zero").style.color = "red";
    } else {
      document.getElementById("zero").style.color = "black";
    }
  }
}
function decBtn() {
  i--;
  document.getElementById("zero").innerHTML = i;
  if (i < 0) {
    if (i % 2 == 0) {
      document.getElementById("zero").style.color = "red";
    } else {
      document.getElementById("zero").style.color = "black";
    }
  }
}

function resBtn() {
  i = 0;
  document.getElementById("zero").innerHTML = i;
  document.getElementById("zero").style.color = "black";
}

