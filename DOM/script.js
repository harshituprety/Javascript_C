// Add a link back to the source of the text after the paragraph tag.

let link = document.createElement("a");

link.textContent = "Go the this link to watch";

link.href = "https://www.youtube.com/";
link.target = "_blank";

document.body.append(link);
