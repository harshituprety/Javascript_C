// * ADD LOCAL STORAGE

let myForm = document.querySelector("#form");
let uname = document.querySelector("#fname");
let age = document.querySelector("#fage");
let college = document.querySelector("#fcollege");
let city = document.querySelector("#fcity");
let state = document.querySelector("#fstate");

myForm.addEventListener("submit", () => {
  localStorage.setItem("name", uname.value);
  localStorage.setItem("age", age.value);
  localStorage.setItem("college", college.value);
  localStorage.setItem("city", city.value);
  localStorage.setItem("state", state.value);
});

//* GET LOCAL STORAGE

let getData = document.querySelector("#get");

getData.addEventListener("click", () => {
  let data = prompt("Enter a key");
  let a = localStorage.getItem(data);
  console.log(a);
});

//* REMOVE LOCAL STORAGE
let remove = document.querySelector("#remove");

remove.addEventListener("click", () => {
  localStorage.removeItem("name", uname.value);
  console.log(localStorage.getItem("name"));
});

//* CLEAR ALL
let clear = document.querySelector("#clear");

clear.addEventListener("click", () => {
  localStorage.clear();
  console.log(localStorage.length);
});
