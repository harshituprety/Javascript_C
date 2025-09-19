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

