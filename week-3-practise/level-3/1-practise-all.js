/* Password Validation
   This program should check if each passwords in the array ("password[]") 
   contains valid Password (see below for password criterias) and return 
   new array ("PasswordValidationResult[]") with True/False booleans.

LEVEL 1: 

Passwords must 
- Have at least 5 characters, 
- Have English uppercase letters (A-Z),
- Have English lowercase letters (a-z),
- Have numbers (0-9).

Expected Result:
PasswordValidationResult= [false, false, frue, true, true]

LEVEL 2:

Passwords must 
- Have at least 5 characters.
- Have English uppercase letters (A-Z)
- Have English lowercase letters (a-z)
- Have numbers (0-9)
- Have non-alphanumeric symbols ("!", "#", "$", "%", ".")

Expected Result:
PasswordValidationResult= [false, false, false, true, true]

LEVEL 3:

Passwords must 
- Have at least 5 characters.
- Have English uppercase letters (A-Z)
- Have English lowercase letters (a-z)
- Have numbers (0-9)
- Have non-alphanumeric symbols ("!", "#", "$", "%", ".")

Passwords must not be any previous password in previousPassword Array. 
PreviousPassword = ["fhD8!yrjj", "ttkTu.wer3", "dvyyeyY!5", "qwbfj76%", "tytT3729."];

Expected Result:
PasswordValidationResult=  [false, false, false, false, true]

*/

// var password = ["Se%5", "TktE.TJTU", "384HsHF", "dvyyeyY!5", "tryT3729."];

// console.log(PasswordValidationResult)

// function comparar (item) {

// }

// password.forEach   (function (item, index) {
//     if (item.length > 5) {
//         PasswordValidationResult [index] = true
//     }
//     else {
//         PasswordValidationResult [index] = false
//     }

//     var arrItem = item.split('')

//     var tieneMayus = arrItem.some (function (character){
//         return character === character.toUpperCase()
//     }
//     console.log(tieneMayus)
//     if (PasswordValidationResult[index] === true){
//         PasswordValidationResult[index] = tieneMayus
//     }
// })


var password = ["Se%5", "TktE.TJTU", "384HsHF", "dvyyeyY!5", "tryT3729."];

let expresionRegular1 = /[0-9]/;
let expresionRegular2 = /[a-z]/;
let expresionRegular3 = /[A-Z]/;
let expresionRegular4 = /[!, #, $, %, .]/

PasswordValidationResult1 = password.map(element => expresionRegular1.test(element) && expresionRegular2.test(element) && expresionRegular3.test(element) && element.length > 5);

PasswordValidationResult2 = password.map(element => expresionRegular1.test(element) && expresionRegular2.test(element) && expresionRegular3.test(element) && element.length > 5 && expresionRegular4.test(element));

PreviousPassword = ["fhD8!yrjj", "ttkTu.wer3", "dvyyeyY!5", "qwbfj76%", "tytT3729."];

PasswordValidationResult3 = password.map(element => expresionRegular1.test(element) && expresionRegular2.test(element) && expresionRegular3.test(element) && element.length > 5 && expresionRegular4.test(element) && !PreviousPassword.includes(element));

console.log(PasswordValidationResult1);
console.log(PasswordValidationResult2);
console.log(PasswordValidationResult3);