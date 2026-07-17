//! String is a sequence of characters used to represent text

let str = "RatanTata";

let size = 0;
for (let i of str) {
  console.log("i=", i);
  size++;
}
console.log("size of string =", size);

let usrname = "michaelKors";
console.log(usrname.length);

console.log(usrname[9]);

//* Template Literals -> to create strings by doing substitution of placeholders

let obj = {
  item: "pen",
  price: 15,
};

let specl = `Ram goes to market for buy ${obj.item}`;
console.log(specl);
console.log(typeof specl);

let str1 = `This is a sum of three numbers:\n 1 + 2 + 3 = ${1 + 2 + 3}`;

console.log(str1);

let str3 = "mr\tBeast";
console.log(str3.length);

// ! String Methods in JS
let str = "miteshRathiClasses";
let newStr = str.toUpperCase();
console.log(newStr);
// strings are immutable

console.log(str.toLowerCase());

let str2 = "   Battleground Infinte Plus  ";

console.log(str2);

let newStr2 = str2.trim();

console.log(newStr2);

let str3 = "7383978333113";

console.log(str3.slice(3, 9));

let join = "Jagran ";
let join1 = "lakecity";
let join3 = " University";

let joinStr =
  "Welcome to Bhopal's premier institute" + " " + join.concat(join1, join3);
console.log(joinStr);

let value = "Uttarakhand Tourism";

console.log(value.replace("Uttarakhand", "Madhya Pradesh"));

/* What will the following print in the javascript?

console.log("har\"".length)
*/

console.log('har"'.length);
// \" :- Escape sequence character

// The includes() method of String values performs a case-sensitive search to determine whether a given string may be found within this string, returning true or false as appropriate.
// The includes() method is case sensitive.
const sentence = "The quick brown fox jumps over the lazy dog.";

const word = "fox";

console.log(sentence.includes(word));

console.log(
  `The word "${word}" ${
    sentence.includes(word) ? "is" : "is not"
  } in the sentence`
);

let team = "Royal Challengers Bengaluru".includes("royal");
console.log(team);

team = "Royal Challengers Bengaluru".toLowerCase().includes("royal");
console.log(team);


// This method lets you determine whether or not a string begins with another string. This method is case-sensitive.

sentence = "The sun is shining, and the birds are singing.";

console.log(sentence.startsWith("the sun"));
console.log(sentence.startsWith("The sun"));
console.log(sentence.startsWith("shining", 11));

// The endsWith() method of String values determines whether a string ends with the characters of this string, returning true or false as appropriate.

const str1 = "Cats are the best!";
console.log(str1.endsWith("Lions"));
console.log(str1.endsWith("best!"));

// Extract the amount out of this String

// ("Please give Rs 300");

let str = "Please give Rs 300";

console.log(str.substring(12, 18));

let change = "Goodnight to everyone in USA";
change[4] = "T";
console.log(change);
