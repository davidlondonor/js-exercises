// Blue Colour

let myBlueBtn = document.querySelector("#blueBtn");
let myJumbotron = document.querySelector(".jumbotron");

myBlueBtn.addEventListener("click", changeColorBlue);
function changeColorBlue() {
  myJumbotron.style.backgroundColor = "#588fbd";
}

// Orange Colour

let myOrangeBtn = document.querySelector("#orangeBtn");
let colorOrange = document.querySelector(".jumbotron");

myOrangeBtn.addEventListener("click", changeColorOrange);

function changeColorOrange() {
  colorOrange.style.backgroundColor = "#f0ad4e";
}

// Green Colour

let myGreenBtn = document.querySelector("#greenBtn");
let colorGreen = document.querySelector(".jumbotron");

myGreenBtn.addEventListener("click", changeColorGreen);

function changeColorGreen() {
  colorGreen.style.backgroundColor = "#87ca8a";
}
