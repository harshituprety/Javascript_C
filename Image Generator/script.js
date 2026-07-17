let imageEl = document.querySelector(".image-container");

let btnEl = document.querySelector("#btn");

btnEl.addEventListener("click", () => {
  imageSum = 10;
  addNewImages();
  console.log("hello");
});

function addNewImages() {
  for (let index = 0; index < imageSum; index++) {
    let newImgEl = document.createElement("img");
    newImgEl.src = `https://picsum.photos/300?random=${Math.floor(
      Math.random() * 2000
    )}`;
    imageEl.appendChild(newImgEl);
  }
}
