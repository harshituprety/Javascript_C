let btn = document.querySelector("button");
let nav = document.querySelector("nav");
let p = document.querySelector("p");

btn.addEventListener("click", () => {
  nav.classList.toggle("nav-slide");
  p.classList.add("fade");
});
