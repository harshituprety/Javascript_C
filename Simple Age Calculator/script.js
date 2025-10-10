let btn = document.querySelector("#calc");
let res = document.querySelector("#result");
let birthday = document.querySelector("#birthday");

function calculateAge() {
  // e.preventDefault();
  console.log("clicked");
  let birthValue = birthday.value;
  if (birthValue === "") {
    alert("Please, Enter your birthday");
  } else {
    let age = getAge(birthValue);
    res.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
  }
}

function getAge(birthValue) {
  let currentDate = new Date();
  let birthdayDate = new Date(birthValue);
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  let month = currentDate.getMonth() - birthdayDate.getMonth();

  if (
    month > 0 ||
    (month === 0 && currentDate.getDate() < birthdayDate.getDate())
  ) {
    age--;
  }
  return age;
}

btn.addEventListener("click", calculateAge);
