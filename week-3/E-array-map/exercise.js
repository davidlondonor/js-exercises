// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

// Si quitamos esto, se puede hacer así.
//  const items = numbers.map(function(number) {
//  return number * 100
// })
// console.log(items);

const items = numbers.map(number => (number * 100) ) // Opcion 2
console.log(items);
    
// const filtered = numbers.filter(n => n >= 0); Otro ejemplo que entendí https://www.youtube.com/watch?v=G3BS3sh3D8Q