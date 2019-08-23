let myBlueBtn = document.querySelector("#blueBtn");
let myOrange = document.querySelector("#orangeBtn");

let myJumbotron = document.querySelector(".jumbotron");

myBlueBtn.addEventListener("click", changeColor);
function changeColor() {
  myJumbotron.style.backgroundColor = "#6495ED";
}

myOrangeBtn.addEventListener("click", changeColor);
function changeColor() {
  myJumbotron.style.backgroundColor = "#f0ad4e";
}
