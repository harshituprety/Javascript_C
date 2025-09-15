let dMode = false;
function Mode() {
  if (dMode) {
    document.body.style.backgroundColor = "#000";
    document.body.style.color = "#fff";
  } else {
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#000";
  }
  dMode = !dMode;
}
