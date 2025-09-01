// Write a function named {minutesToHours} that receives a number of minutes as parameter and returns a number representing the same amount of time but in hours.


function minutesToHours() {
    let minutes = parseInt(prompt("Enter number of minutes to convert"));
    return (minutes / 60);
}

console.log(minutesToHours());

// Write a function named averageOf4Numbers that receives 4 numbers as parameters and returns the mathematical average between them.

function averageOf4Numbers(nr1, nr2, nr3, nr4) {
    let average = (nr1 + nr2 + nr3 + nr4) / 4;
    return average;
}

console.log(averageOf4Numbers(60, 30, 20, 40));

// Write a function named concat3 that receives 3 strings as parameters (string1, string2, string3) and an additional string named separator.
// The function should concatenate the three strings using the provided separator and return the result.

function concat3(string1, string2, string3, separator) {
    let mix = (string1 + separator + string2 + separator + string3);
    return mix;
}

console.log(concat3("HTML", "CSS", "Javascript", ","));




function fusion() {
  console.log("the name of variable is " + name);
  console.log("the age of variable is " + age);
  var name = "Red John";
  let age = 993;
}

fusion();
