// The basic syntax of a while loop in JavaScript is as follows:

while (condition) {
  // code to be executed;
}


// Printing Numbers from 1 to 10 using While Loop in JavaScript

let i = 1;

while (i <= 10) {
  console.log(i);
  i++;
}

// Summing the First N Natural Numbers with JavaScript While Loop

let i = 1;
let n = 100;
let sum = 0;
while (i <= n) {
  sum = sum + i;
  i++;
}

console.log(sum);

// Calculating Factorial Using While Loop in JavaScript

let i = parseInt(prompt("Enter a number"));
let fact = 1;
if (i > 1) {
  while (i > 1) {
    fact *= i;
    i--;
  }
}
else {
  console.log("Invalid Number")
}

console.log(fact);
