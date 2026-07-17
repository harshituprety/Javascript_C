let color1 = document.querySelector("#backOne");

color1.addEventListener("click", () => {
  color1.style.color = "yellow";
});

let bbtn = document.querySelector("#btn");

bbtn.addEventListener("dblclick", () => {
  alert("Hello");
});

let over = document.querySelector("#hover");

over.addEventListener("mouseover", () => {
  over.style.backgroundColor = "chocolate";
});

over.addEventListener("mouseleave", () => {
  over.style.backgroundColor = "white";
});

let enjoy = document.querySelector("#image");

enjoy.addEventListener("mouseenter", () => {
  enjoy.style.filter = "blur(9px)";
});

enjoy.addEventListener("mouseleave", () => {
  enjoy.style.filter = "blur(0px)";
});

let user = document.querySelector("#formdata");

user.addEventListener("submit", () => {
  alert("Form is submitted");
});

let userName = document.querySelector("#name");

userName.addEventListener("change", () => {
  userName.style.textDecoration = "uppercase";
});



