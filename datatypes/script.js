DATATypes :->

Primitive & Non-Primitive Data Types

Primitive DataTypes:->
let age = 12;
let price = 299.33;
let isFollow = true;
let fullName = "Tomy stark";

let a = null;

let b = BigInt("23332");
let y = Symbol("Hello");

// Non-Primitive DataTypes:->
// Arrays
// Objects:-> CoLlection of a values
// Functions

let student = {
  fullName: "Rahil singh",
  age: 30,
  cgpa: 4.3,
  isPass: true,
};
console.log(student);

const accountId = 221332;
let accountEmail = "harshit@gmail.com";
var accountPassword = "2332";
accountCity = "Calcutta";

// accountId = 2134;

accountEmail = "ad2adw@gmail.com";
console.log(accountId);

console.table([accountEmail, accountId, accountPassword]);

("use strict");

alert(2 + 2); not used in nodejs

number => 2 to power 53
BigInt
string => ""
boolean => true/false
null => standalone value
undefined =>
symbol

console.log(typeof null);
console.log(typeof undefined);





let firstName = "Harshit";
let job = "graphics designer";
let birthYear = "1996";
let year = 2040;

let harshit =
  "I'am " +
  firstName +
  ", a" +
  (year - birthYear) +
  " years old " +
  "job" +
  "!";
console.log(harshit);

harshit = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(harshit);

console.log(`Just a regular string....`);
