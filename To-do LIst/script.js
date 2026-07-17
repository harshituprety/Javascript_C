let formEl = document.querySelector(".form");

let inputEl = document.querySelector("#input");
let ulEl = document.querySelector(".list");
formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  todolist();
});

function todolist() {
  let n = inputEl.value;
  let liEl = document.createElement("li");
  liEl.innerText = n;
  ulEl.appendChild(liEl);
  inputEl.value = "";
  let checkBtnEl = document.createElement("div");
  checkBtnEl.innerHTML = `
  <i class="fa-solid fa-square-check"></i>
  `;
  liEl.appendChild(checkBtnEl);
  let trashBtnEl = document.createElement("div");
  trashBtnEl.innerHTML = `
<i class="fa-solid fa-trash"></i>
  `;
  liEl.appendChild(trashBtnEl);

  checkBtnEl.addEventListener("click", () => {
    liEl.classList.toggle("checked");
  });

  trashBtnEl.addEventListener("click", () => {
    liEl.remove();
  });
}
