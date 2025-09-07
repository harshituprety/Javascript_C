function fun() {
  let a = prompt("Enter your first color.");
  let b = prompt("Enter your second color");
  if (a && b) {
    document.body.style.background = `linear-gradient(to right, ${a}, ${b})`;
  }
  // document.body.innerHTML = user;
}


