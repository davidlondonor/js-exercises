/*
Use fetch to load a greeting from the API and display it 
in the HTML element with the id "greeting-text".

API: https://codeyourfuture.herokuapp.com/api/greetings
Response: A greeting in a random language

To learn more about fetch, refer to the doc:
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch


================
Expected result
================

Open index.html in your browser. Every time you refresh the page,
a different greeting should be displayed in the box.
*/

fetch("https://codeyourfuture.herokuapp.com/api/greetings")
  .then(function(response) {
    //Le decimos que ejecute la funcion, en este caso es saludo y es positivo
    return response.text();
  })
  .then(function(greeting) {
    let segundThen = document.querySelector("#greeting-text");
    segundThen.innerHTML = greeting; // Write the code to display the greeting text here
  });

// en el primer .then le devuelve al segundo .then un texto
// la respuesta del primer then la toma el segundo.
