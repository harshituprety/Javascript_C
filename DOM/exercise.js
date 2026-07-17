// Create a H2 heading element with text -"Hello Javascript".Append "from MIT students" to this text using JS.

let text = document.getElementById("heading");
text.append(" from MIT students");

//Create 3 divs with common class name - "box". Access them & add some unique text to each of them

let divs = document.querySelectorAll(".box");
let i = 1;
for (div of divs) {
  div.innerText = `new unique value ${i}`;
  i++;
}
// divs[0].innerText = "new unique value 1";
// divs[1].innerText = "new unique value 2";
// divs[2].innerText = "new unique value 3";

//Create a new button element. Give it a text "click me", Background color of red & text color of white
// Insert the button as the first element inside the body tag

let button = document.createElement("button");
button.innerText = "Click ME";

button.style.backgroundColor = "red";
button.style.color = "white";

document.querySelector("body").prepend(button);

// Create a <p> tag in html, give uit a class & some styling.
// Now create a new class in CSS and try to append this class to the <p> element

let para = document.querySelector("p");

para.classList.add("newClass");
console.log(para.classList);
