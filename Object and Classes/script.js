
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
