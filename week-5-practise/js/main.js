// Blue Colour

let myBlueBtn = document.querySelector("#blueBtn");
let myJumbotron = document.querySelector(".jumbotron");

myBlueBtn.addEventListener("click", changeColorBlue);

function changeColorBlue() {
  myJumbotron.style.backgroundColor = "#588fbd";
}

// let donateBike = document.querySelector(".btn.btn-primary.btn-lrg");
// let myJumbotron = document.querySelector(".jumbotron");

// donateBike.addEventListener("click", ChangeBackGround);

// function ChangeBackGround() {
//   myJumbotron.style.backgroundColor = "#ffa500";
// }

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

// const formName = document.querySelector('form > .btn.btn-primary");')
// formDesc.value = document.querySelector('.form-control')
// formMail.value = document.querySelector('form')

// submitBoton.addEventListener("click", function() { //Esta forma no medio
//   if (formName.value.length == 0) {
//     formName.style.backgroundColor = "red";
//   }
//   if (formDesc.value.length == 0) {
//     formDesc.style.backgroundColor = "red";
//   }
//   if (!formMail.value.includes('@') || formMail.value.length == 8) {
//     formMail.style.backgroundColor = 'red';
//   } else (formName.value.length > 0 && formDesc.value.length > 0) {
//     alert('Gracias por llenar el formulario');
//     formName.value = '';
//     formDesc.value = '';
//     formMail.value = '';
//   }
// });

// Validation form

const btnSubmit = document.querySelector("form > .btn.btn-primary");
const input = document.querySelectorAll(".form-control");
const form = document.querySelector("form");
const email = document.querySelector("#exampleInputEmail1");

const inputArray = [...document.querySelectorAll(".form-control")];

btnSubmit.addEventListener("click", validateInput);

function validateInput(e) {
  e.preventDefault();
  let isFormValid = true;
  inputArray.forEach(function(input, index, array) {
    if (input.value === "") {
      isFormValid = false;
      input.style.backgroundColor = "red";
    } else if (!email.value.includes("@")) {
      isFormValid = false;
      email.style.backgroundColor = "red";
    } else {
      input.style.backgroundColor = "";
    }
  });
  if (isFormValid) {
    alert("Gracias por llenar nuestro formulario");
    form.reset();
  } else {
    alert("Hay errores en el formulario!");
  }
}
