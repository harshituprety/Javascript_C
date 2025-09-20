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
