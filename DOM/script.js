// Change the text content of a specific element on a web page.

let b = document.getElementById("head1");
b.textContent = "The upcoming Harry Potter TV series is currently filming in the UK, with production expected to continue until next spring.";

// Change the style of an element dynamically.

let beautify = document.getElementById("head2");
beautify.style.color = "Tomato";
beautify.style.fontStyle = "italic";
beautify.style.backgroundColor = "Teal";

//Write JavaScript code to get the href attribute of an <a> element with the ID "myLink".

document.getElementById("myLink").removeAttribute("href");

// Change the src attribute of an <img> tag with ID "image1" to "new-image.jpg".

let image = document.getElementById("image1");
image.src = "https://variety.com/wp-content/uploads/2025/08/GettyImages-2232560579.jpg?w=1000&h=667&crop=1&resize=1360%2C907";

//Clear all content inside a <section> with ID "mainSection" using innerHTML.

let sec = document.getElementById("mainSection");
sec.innerHTML = "";

// Set type="button" and value="Submit" on an input element with ID "submitBtn"

let type = document.getElementById("submitBtn");
type.setAttribute("type", "button");

let value = document.getElementById("submitBtn");
value.setAttribute("value", "Submit");
