
// Write a program to print the marks of a student in  an object using for loop
// obj ={mahesh: 89, rohit:79, aavesh:58}
let marks = {
  mahesh: 89,
  rohit: 79,
  aavesh: 58,
};

for (let i = 0; i < Object.keys(marks).length; i++) {
  console.log(Object.keys(marks)[i] + "are" + marks[Object.keys(marks)[i]]);
}

for (let keys in marks) {
  console.log("Marks of " + keys + " are " + marks[keys]);
}

// Write a function extractNames that extracts names from an array of objects.

let names = [
  {
    name: "Rajesh",
    city: "Pune",
    Contact: 8942178431,
  },
  {
    name: "Prashant",
    city: "Baroda",
    Contact: 7236145289,
  },
  {
    name: "Shridhar",
    city: "Bhagalpur",
    Contact: 9614236573,
  },
];

function extractNames(arr) {
  return arr.map((i) => i.name);
}
let data = extractNames(names);
console.log(data);

// WAP to create a word meaning dictionary of 5 words

let dict = {
  circadian: "having or relating to 24-hour biological cycles",
  parliamentary:
    "relating to a country's lawmaking body (parliament) or its members",
  raptor: "a carnivorous bird that hunts other animals",
  resilient: "recovering readily from adversity, depression, or the like",
  shantytown: "a city district with large numbers of makeshift dwellings",
};
console.log(dict.raptor);

const obj = { name: "girish", age: 32, contact: 7238476311 };
// obj = { name: "Illinos", country: "USA", state: "Texas" };
// console.log(obj);
obj["name"] = "jasmine";

console.log(obj);
