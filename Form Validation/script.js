let form = document.querySelector("#form");

let nameErr = document.querySelector("#name-error");
let addrErr = document.querySelector("#address-error");
let emailErr = document.querySelector("#email-error");
let passErr = document.querySelector("#password-error");

function formdata(event) {
  event.preventDefault(); // stop auto submission

  // clear old errors
  nameErr.textContent = "";
  addrErr.textContent = "";
  emailErr.textContent = "";
  passErr.textContent = "";

  let name = document.querySelector("#name").value.trim();
  let address = document.querySelector("#address").value.trim();
  let email = document.querySelector("#email").value.trim();
  let pass = document.querySelector("#password").value.trim();

  let isValid = true;

  if (name === "" || /\d/.test(name)) {
    nameErr.textContent = "Enter your name correctly";
    isValid = false;
  }

  if (address === "") {
    addrErr.textContent = "Enter your address correctly";
    isValid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    emailErr.textContent = "Enter your email correctly";
    isValid = false;
  }

  const strongPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
  if (pass === "" || pass.length < 6 || pass != strongPassword) {
    passErr.textContent = "Enter your password correctly";
    isValid = false;
  }

  if (isValid) {
    alert("Form Submitted Successfully");
    form.reset();
  }
}

function resetErrors() {
  nameErr.textContent = "";
  addrErr.textContent = "";
  emailErr.textContent = "";
  passErr.textContent = "";
}

form.addEventListener("submit", formdata);
form.addEventListener("reset", resetErrors);
