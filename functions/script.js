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

/** Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".
**/

var expect = (val)=>({
  toBe(otherVal){
    if(val===otherVal) return true;
    else throw new Error("Not Equal");
  },
  notToBe(otherVal){
    if(val!== otherVal) return true;
    else throw new Error("Equal");
  }  
});

expect(3).toBe(3) // true

/** Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

The three functions are:

increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it.
**/

var createCounter = function(init){
    let a = init
    function increment(){
        return ++a;
    }
    function decrement(){
        return --a;
    }
    function reset(){
        return (a = init);
    }

    return {increment,decrement,reset}
}

/* This function should test if the factor is a factor of base.

Return true if it is a factor or false if it is not.

About factors
Factors are numbers you can multiply together to get another number.

2 and 3 are factors of 6 because: 2 * 3 = 6

You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
You can use the mod operator (%) in most languages to check for a remainder
For example 2 is not a factor of 7 because: 7 % 2 = 1

Note: base is a non-negative number, factor is a positive number.*/

function checkForFactor (base, factor) {
   if(base % factor == 0){
      return true    
  }else{
      return false
  }
}

/* You get an array of numbers, return the sum of all of the positives ones. */

function positiveSum(arr) {
    let sum =0;
    for(let i=0; i<arr.length; i++){
      if(arr[i]>0){
         sum+=arr[i];
    }
  }
    return sum;
}
