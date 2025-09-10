let a = document.querySelector("#name");
let b = document.querySelector("#number");
// let c = 0;
function formdata() {
  if (a.value === "" && b.value === "") {
    alert("Please enter a value");
    return false;
    // c == 1;
  } else {
    alert("Form submitted");
    return true;
    // c == 0;
  }
}
