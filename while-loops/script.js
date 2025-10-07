// The basic syntax of a while loop in JavaScript is as follows:

while (condition) {
  // code to be executed;
  // increment or decrement
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

// Write a program to print 'try again' until the user enters the correct number
let n = 34;
let i;

while (i != n) {
  console.log("Try again");
  i = parseInt(prompt("Enter correct number"));
}

console.log("You guessed it right");

// Write a loop that makes seven calls to console.log to output the
// following triangle:

// #
// ##
// ###
// ####
// #####
// ######
// #######

let line = "";
let i = 1;

while (i <= 7) {
  line += "#";
  console.log(line);
  i++;
}

/*Write a program that uses console.log to print all the numbers
from 1 to 100, with two exceptions. For numbers divisible by 3, print
"Fizz" instead of the number, and for numbers divisible by 5 (and
not 3), print "Buzz" instead.

When you have that working, modify your program to print
"FizzBuzz" for numbers that are divisible by both 3 and 5 (and
still print "Fizz" or "Buzz" for numbers divisible by only one of
those).*/

let a1 = 1;
let a2 = 100;

let a3 = a2 + 1;

let n = 0;

while (a1 < a3) {
  if (a1 % 3 == 0 && a1 % 5 == 0) {
    console.log("FizzBuzz");
  } else if (a1 % 3 == 0) {
    // n = a1;
    console.log("Fizz");
  } else if (a1 % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(a1);
  }

  a1++;
}
