let container = document.querySelector("#container");
let icon = document.querySelector("i");

container.addEventListener("dblclick", () => {
  // console.log("Hello");
  icon.style.transform = "translate(-50%, -50%) scale(2)";
  icon.style.opacity = 0.9;

  setTimeout(function () {
    icon.style.opacity = 0;
  }, 1000);
  setTimeout(function () {
    icon.style.transform = "translate(-50%, -50%) scale(0)";
  }, 2500);
});
