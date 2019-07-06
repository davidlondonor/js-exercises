// The code is valid but the program does not produce the expected result
// Why doesn't it work?
// Fix it.

var isHappy = false; // el False está declarado como un string

if (isHappy == false) {
  console.log("I am happy");
} else {
  console.log("I am not happy");
}

/* 
  EXPECTED RESULT
  ---------------
  I am not happy
*/
