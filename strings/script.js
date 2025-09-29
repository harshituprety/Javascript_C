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


