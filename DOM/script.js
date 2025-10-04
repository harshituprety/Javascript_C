let addBtn = document.querySelector("#add");
let header = document.querySelector("h5");
let heading = document.querySelector("h1");
let tick = 0;

addBtn.addEventListener("click", () => {
  if (tick == 0) {
    header.textContent = "Friend";
    header.style.color = "Blue";
    addBtn.innerHTML = "Remove Friend";
    tick = 1;
  } else {
    header.textContent = "Unfriend";
    header.style.color = "Red";
    tick = 0;
    addBtn.innerHTML = "Add Friend";
  }
});
