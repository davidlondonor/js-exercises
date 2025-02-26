/* 
  Using .forEach() print the numbers 1 to 15, with some exceptions:
  - For multiples of 3 print “Fizz” instead of the number 
  - For the multiples of 5 print “Buzz”. 
  - For numbers which are multiples of both 3 and 5 print “FizzBuzz”

  An array with numbers 1-15 has been provided.
*/
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

arr.forEach(function(forichado) {
  // console.log('element ', index, element);
  // console.log('arr[element] ', arr[element]);
  // console.log('arr[index] ', arr[index]);
  if ((forichado % 3 === 0) && (forichado % 5 === 0)) {
      console.log('FizzBuzz');
  } else if (forichado % 3 === 0) {
      console.log('Fizz');
  } else if (forichado % 5 === 0) {
      console.log('Buzz');
  } else {
      console.log(forichado);
  }
})


 

// arr.forEach(function(forichado) {

// if ((forichado % 3 === 0) && (forichado %5 === 5)) {
//   console.log('FizzBuzz');
//  } 
// });

// % es el modulo

/* EXPECTED OUTPUT */

/*
1
2
'Fizz'
4
'Buzz'
'Fizz'
7
8
'Fizz'
'Buzz'
11
'Fizz'
13
14
'FizzBuzz'
*/