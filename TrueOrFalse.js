'use strict';

// task 1

if ("0") {
  alert('hello');
}  // the alert will show hello , cus it chech if string include a value , true!

//task 2

let answer = prompt("What is the official name ");
if (answer === "ECMAScript")
  alert('correct');
else
  alert('wrong! the official name is ECMAScript');

//task3
let score = 75;
let grade = score >= 90 ? 'A' :
  score >= 80 ? `B` :
    score >= 70 ? `C` :
      score >= 60 ? `D` : `F`

console.log("הציון הוא:", grade);

//task 4

let number = prompt("Enter a number:")
if (number > 0)
  alert('1')
else if (number < 0)
  alert('-1')
else
  alert('0')

//task 5
let a = 3
let b = 5
let result = a + b < 4 ? 'Not enough' : 'A lot';
console.log(result);

//task 6
let message;
let login = prompt('Login =?')
alert(login == 'Employee' ? 'Hello' : login == 'Director' ? 'Hello' : login == ' ' ? 'No login' : ' ');


//task 7 
console.log(false || 'sdf'); // sdf
console.log(false && ''); // false
console.log(true || ' '); // true
console.log(true && ' '); //  
console.log(undefined || null); // null
console.log(undefined || 0 || null); // null
console.log(undefined && 0 && null); // false
console.log(1 || 0); // 1
console.log(null || 1); // 1
console.log(null || 0 || 1); // 1

// Meitav itah && Ben solomon