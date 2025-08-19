// Write a program that determines whether a given number is positive or negative.

let gNumber = parseInt(prompt("Enter a number"));

if(gNumber>0){
    console.log("Positive Number");
}
else{
    console.log("Negative Number");
}

// Write a program that checks if a number is even or odd using ternary operator.

let n = parseInt(prompt("Enter a number"));

let ans = (n % 2 == 0) ? "Even Number" : "Odd Number";

console.log(ans);

// Write a program to determine the greater of two numbers.

let numOne = parseInt(prompt("Enter a number"));
let numTwo = parseInt(prompt("Enter second Number"));

if(numOne>numTwo){
    console.log("First Number is bigger");
}
else{
    console.log("Second Number is bigger");
}

// Write a program that transforms a numerical grade to a letter grade (e.g grade 10 should display “A”).

let grade = parseInt(prompt("Enter a grade"));

if (grade == 10) {
    console.log("A grade");
} else if (grade == 9) {
    console.log("B grade");
}else if (grade == 8) {
    console.log("C grade");
}else if (grade == 7){
    console.log("D grade");
}else{
    console.log("Invalid Number");
}

// Write a program that calculates the ticket price based on age with the following conditions: age below 12 pay a ticket price of 5, age below 18 pay a ticket price of 10, age below 60 pay a ticket price of 20, age over 60 play a ticket price of 15.

let age = parseInt(prompt("Enter your Age"));
const rupeeSymbol = '\u20B9';

if (age < 12) {
    console.log("Your Ticket price is " + rupeeSymbol + 5);
} else if (age < 18 && age > 12) {
    console.log("Your Ticket price is " + rupeeSymbol + 10);
} else if (age < 60 && age > 18) {
    console.log("Your Ticket price is " + rupeeSymbol + 20);
} else {
    console.log("Your Ticket price is " + rupeeSymbol + 15);
}

// Write a simple number guessing game. Provide a secret number and a guess. Based on those numbers give players clues if their guess is higher, lower or correct.

let secretNumber = parseInt(prompt("Enter secret number"));
let guess = 9;

if (guess == secretNumber) {
    console.log("Well done. You guessed right ✌🎉🎊");
} else if (secretNumber > guess) {
    console.log("Try a lower number")
} else {
    console.log("Try a Higher Number");
}
