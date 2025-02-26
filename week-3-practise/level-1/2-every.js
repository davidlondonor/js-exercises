/*
 Following on from exercise level-1/1-find.js
  The travellers have safely landed and are foraging for food in the natural wildlife.
  There are bushes with many different colour berries.
  The pink berries are the ONLY safe ones to eat.
  If any other berries are present, it's best not to eat from the bush at all!
  Determine if the bush has ALL PINK berries and is safe for the astronauts to eat from the bush.
  Hint included at end of file.
*/

var bush1BerryColours = ["pink", "pink", "pink", "neon", "pink", "transparent"];
var busbottonBerryColours = ["pink", "pink", "pink", "pink"];

var bush1SafeToEat = bush1BerryColours.every(item => item === "pink"); //Complete this statement
var busbottonSafeToEat = busbottonBerryColours.every(pinky => pinky === "pink"); 
// La variable bush1SafeToEat busca que dentro de ella todos cumplan la doncicion (arrow funcion) => item es igual a pink
// Siempre debo usar esta estructura pinky => pinky y luego a que le voy a buscar o hacer el every.
// el metodo every lo que hace es correrme esto: (item => item === "pink" ) item es en este caso pink 
// pero puede ser cualquier palabra o numero que busque en la varible. Item puede cambiar y pink //
// dependerá según la necesidad.

if (bush1SafeToEat) {
  console.log("Bush 1 is safe to eat from");
} else {
  console.log("Toxic! Leave bush 1 alone");
}

if (busbottonSafeToEat) {
  console.log("Bush 2 is safe to eat");
} else {
  console.log("Toxic! Leave bush 2 alone");
}

/*
 EXPECTED OUTPUT
 Toxic! Leave bush 1 alone"
 Bush 2 is safe to eat from"
*/

/* Hint:
"Hfr gur rirel shapgvba"
(decode this at https://rot13.com)
*/
