"use strict";

// Task 1 While
let i = 1;
let sum = 0;
while (i <= 100) {
  sum += i;
  i++
}
console.log(sum);

// Task 2 Do-While
let num1 = 1
do {
  let num1 = prompt("enter number:")
} while (num1 <= 0 || isNaN(num1))
console.log(`your num is ${num1}`);

// Task 3 For
let num2 = 7;
for (let i = 1; i <= 10; i++) {
  console.log(num2 * i)
}
// Task 4 Break
const secret = 7
while (true) {
  let num3 = prompt(`Enter a number (1-10)`)
  if (num3 == secret) {
    alert(`Right`);
    break;
  }
}

// Task 5 Continue
for (let i = 1; i <= 30; i++) {
  if (i % 3 == 0)
    continue
  console.log(i)
}

// Task 6
let i_2 = 3;
while (i_2) {
  alert(i_2--);
} // Last value will be 1 

// Task 7
// No, the left one will increment the i before while condition and the right one will increment after.

// Task 8
// Yes, in the for loop, the i will be incremented after the block has been ran.

// Task 9
for (let i = 2; i <= 10; i++) {
  if (i % 2 != 0)
    continue;
  alert(i)
}

// Task 10
for (let i = 0; i < 3; i++) {
  alert(`number ${i}!`);
}
let i_3 = 0
while (i_3 < 3) {
  alert(`Number ${i_3}!`)
  i_3++;
}

// Meitav itah && Ben solomon