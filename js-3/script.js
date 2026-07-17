// Give a string, reverse each word in  a sentence?
let str = "cockroach janta party"

let a = str.split(" ").map(function (e) {
    return e.split("").reverse().join("")
})

console.log(a.join(" "))

// How to check if an object is an array or not?
// Provide Some code

let checkArray = function (e) {
    return Array.isArray(e)
}
console.log(checkArray([]))
console.log(checkArray({}))

// How to reset an array in JS?
// donot rest it to a new array, and do loop through to pop each value
let arr = [2, 3, 5, 1, 6, 7]
console.log(arr.length)
arr.length = 0
console.log(arr)

let x = 12.97;
if (x % 1 == 0) {
    console.log("This is integer")
} else {
    console.log("Not a  Integer")
}

// Make this work:
// duplicate([1,2,3,4,5])

let arr1 = [1, 2, 3, 4, 5]

function duplicate(arr1) {
    return arr1.concat(arr1)
}
console.log(duplicate(arr1))

// Write a js function to reverse a number

