/*
Task 1
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
var cambiarColorFondoBoton = document.querySelector('#bgrChangeBtn');
cambiarColorFondoBoton.addEventListener("click", function() {
    let color = "yellow"; 
    document.body.style.backgroundColor = color;
});

console.log(cambiarColorFondoBoton);
/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
var botonAlert = document.querySelector('#alertBtn');
botonAlert.addEventListener('click', function() {
    alert ("Thanks for visiting Bikes for Refugees!")
} )

/*
Task 3
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/
let botondeLeerMas = document.querySelector('#addTextBtn'); //inner es para pintar en el html
let cajadeTexto = document.querySelector('.jumbotron'); //appendchild es para crearlo pero no lo //muestra, queda en memoria.
let creandoPdeParrafo = document.createElement('p'); 
botondeLeerMas.addEventListener('click', function(){
cajadeTexto.appendChild(creandoPdeParrafo);
creandoPdeParrafo.innerHTML = 'Read more below.';
});

/*
Task 4
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

let mayorTamano = document.querySelector('#largerLinksBtn');
// let click = document.querySelectorAll('.article-title a');

mayorTamano.addEventListener('click', sizes)

function sizes() {
    let click = document.querySelectorAll('.article-title--sidebar');
    let i;
    for (i = 0; i < click.length; i++) {
        click[i].style.fontSize = '4em'
    }
}

// function sizes() {
//     [].forEach.call(click, (e) => {
//         e.style.fontSize = '2em'
//     })
// }



