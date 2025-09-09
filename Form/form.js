function formdata() {
  let userName = document.querySelector("#name").value;
  let userEmail = document.querySelector("#mail").value;
  let userInterest = document.querySelector("#inter").value;
  let userContact = document.querySelector("#numb").value;
  let userMessage = document.querySelector("#message").value;
  alert(`Form Submitted:
    Name: ${userName}
    Email: ${userEmail}
    Contact:  ${userContact}
    Interest: ${userInterest}
    Message: ${userMessage}
    `);
}
