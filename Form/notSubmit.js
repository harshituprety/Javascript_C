function formdata() {
  let a = document.querySelector("#name");
  let b = document.querySelector("#number");

  if (a.value === "" && b.value === "") {
    a.focus();
    b.focus();
    alert("Please enter a value");
    return false;
    // c == 1;
  } else {
    alert("Form submitted");
    return true;
    // c == 0;
  }
}

