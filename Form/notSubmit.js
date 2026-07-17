function formdata() {
  let a = document.querySelector("#name");
  let b = document.querySelector("#number");

  if (a.value === "") {
    a.focus();
    alert("Please enter a name");
    return false;
    // c == 1;
  }
  if (b.value.length != 10) {
    b.focus();
    document.querySelector("#errorage").textContent =
      "Error: Enter a valid number";
    document.querySelector("#errorage").style.color = "red";
    // alert("Enter a valid number");
    return false;
  } else {
    alert("Form submitted");
    return true;
    // c == 0;
  }
}


