// Declare an array named `teaFlavors` that contains the strings `"green tea`, `"black tea"`, `"oolong tea"`. Access the first element of the array and store it in a variable named `firstTea`.

let teaFlavors = ["green tea", "black tea"];

// let marks = [92, 83, 83, 29, 45];
// console.log(marks);
// console.log(marks.length);

// let str = "hello";
// console.log(str[0]);

// Print all elements of array

let superheroes = ["ironman", "superman", "batman", "spiderman", "aquaman"];
//for loop
for (let a = 0; a < superheroes.length; a++) {
  console.log(superheroes[a]);
}

//for of

let cities = ["delhi", "pune", "mumbai", "bhopal", "chennai"];
for (let city of cities) {
  console.log(city.toUpperCase());
}

// For a given array with marks of students -> [34,87,21,99,63,75]
// Find the average marks of the entire class

let marks = [34, 87, 21, 99, 63, 75];
let sum = 0;
for (let average of marks) {
  sum += average;
}
console.log(sum);

let avg = sum / marks.length;
console.log(`avg marks of the class = ${avg.toFixed(2)}`);

//For a given array with price of 5 items -> [250,645,300,900,50]
//All items have an offer of 10% OFF on them. Change the array to store the final price after applying offer.
let items = [250, 645, 300, 900, 50];

let i = 0;
for (let val of items) {
  let offer = val / 10;
  items[i] = items[i] - offer;
  console.log(`value after offer = ${items[i]}`);
  i++;
}

/ Return the largest number in an array

let a = [23, 11, 35, 94, 99];
let largest = a[0];

for (let i = 0; i < a.length; i++) {
  if (a[i] > largest) {
    largest = a[i];
  }
}
console.log(largest);

a.forEach((e) => {
  if (e > largest) {
    largest = e;
  }
});

console.log(largest);

// Return a new array containing only the even numbers from the input array.

let array = [22, 85, 43, 92, 99, 21, 87, 47, 34, 33];

let even = array.filter((a) => a % 2 == 0);

console.log(even);

// Return the last element in an array.
let arr = [3, 21, 8, 383, 32];

let b = arr.pop();
console.log(b);

// Return a new array where every number is multiplied by 2.

let r = [3, 2, 45, 883, 3];
let n = [];
r.forEach((e) => {
  n.push(e * 2);
});

console.log(n);

//* Array methods

let foodItems = ["banana", "apples", "guavas", "pineapples"];

foodItems.push("grapes");
console.log(foodItems);

let deletedItems = foodItems.pop();

console.log(deletedItems);
console.log(foodItems.toString());

let marks = [93, 84, 89, 23, 24];

console.log(marks.toString());

let marvelHeroes = ["sunspot", "wolverine", "magneto", "blade"];
let dcHeroes = ["batman", "metamorpho", "shazam", "flash"];
let indianHeroes = ["doga", "nagraj", "tausi", "dhruva"];

let heroes = marvelHeroes.concat(dcHeroes, indianHeroes);
console.log(heroes);

marvelHeroes.unshift("vision");
console.log(marvelHeroes);

let val = marvelHeroes.shift();
console.log("deleted ", val);

console.log(marvelHeroes.slice(1, 3));
//? slice(startIdx, endIdx);

let a = marvelHeroes.splice(1, 2, "mystique");
console.log(a);

let num = [1, 2, 3, 4, 5, 6];
num.splice(0, 2, 101, 102);

//Write a function squareNumbers that uses map() to square each number in an array.

let arr = [1, 2, 3, 4];
let a = arr.map((value) => {
  // console.log(value);
  return value ** 2;
});
console.log(a);

// Write a function that takes an array as input and returns a new array with all duplicate elements removed. Ensure that the order of the elements in the output array remains the same as in the original array.

let n = [1, 2, 4, 5, 2, 3, 4];
let duplicate = [...new Set(n)];
console.log(duplicate);

// Create an array of numbers and take input from the user to add numbers to this array

let arr = [1, 2, 3, 4, 5];

let user = parseInt(prompt("Enter a number"));
user = arr.push(user);
console.log(arr);

// Rewrite the code below to use array destructuring instead of assigning each value to a variable.


/**  console.log("EXERCISE 1");

  let item = ["Egg", 0.25, 12];

  let name = item[0];
  let price = item[1];
  let quantity = item[2];

  console.log(`Item: ${name}, Quantity: ${quantity}, Price: ${price}`);
  console.log();
**/

let [name, price, quantity] = ["Egg", 0.25, 12];

console.log(`Item: ${name}, Quantity: ${quantity}, Price: ${price}`);

/**
Exercise 2

Rewrite the code below to assign each number to the right variable.

{
  console.log("EXERCISE 2");

  let numbers = [3, 5, 4, 2, 6, 1];

  let [one, two, three, four, five, six] = numbers;

  console.log(`One: ${one}, Two: ${two}, Three: ${three}, Four: ${four}, Five: ${five}, Six: ${six}`);
  console.log();
}
**/

let numbers = [1, 2, 3, 4, 5, 6];

let [one, two, three, four, five, six] = numbers;

console.log(
  `One: ${one}, Two: ${two}, Three: ${three}, Four: ${four}, Five: ${five}, Six: ${six}`
);

/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

const twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
        for (let j = i +1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                return [i ,j]
            }
        }
    }
};
