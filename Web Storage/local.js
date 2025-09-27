// let user = [
//   {
//     name: "si",
//     email: "si@gmail.com",
//   },
// ];
// localStorage.setItem("name", JSON.stringify(user));
// console.log(typeof JSON.parse(localStorage.getItem("name")));
let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  let name = document.querySelector("#uname").value;
  let email = document.querySelector("#email").value;
  let phone = document.querySelector("#phone").value;

  let userData = JSON.parse(localStorage.getItem("userDetails")) ?? [];
  userData.push({
    name: name,
    email: email,
    phone: phone,
  });

  localStorage.setItem('userDetails',JSON.stringify(userData))
  // console.log(userData);
  // console.log(name, email, phone);
  // alert("Hello");
  e.preventDefault();
});
