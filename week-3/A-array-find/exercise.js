/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name 
  which starts with A and is longer than 7 letters.
*/

// write your code here

var names = ["Rakesh", "Antonio", "Alexandra", "Andronicus", "Annam", "Mikey", "Anastasia", "Karim", "Ahmed"];
//El parámetro (lo que va entre paréntesis de la funcion) va a representar la variable names
var longNameThatStartsWithA = names.find(EncontreElNombreConAmayuscula)

function EncontreElNombreConAmayuscula(LosNombres) { 
 
 return LosNombres[0] === "A" && LosNombres.length > 7;
}
// Todo los nombres pasan por la funcion que se llama 'EncontreElNombreConAmayuscula' Return y se ejecuta, y verifica que cumpla
console.log(longNameThatStartsWithA);

//charAT() metodo, 
/* EXPECTED OUTPUT */
// "Alexandra"
