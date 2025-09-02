// Add a link back to the source of the text after the paragraph tag.

let link = document.createElement("a");

link.textContent = "Go the this link to watch";

link.href = "https://www.youtube.com/";
link.target = "_blank";

document.body.append(link);

// Create a button that changes its text to "Clicked!" when you click on it.
function change() {
  document.getElementById("check").textContent = "Clicked!";
}

// Create a custom tooltip that appears near the mouse cursor when hovering over an image.

function tooltip() {
  let hover = document.getElementById("tip");
  hover.setAttribute("title", "Ferris wheel");
  hover.style.width = "500px";
  hover.style.height = "500px";
}
