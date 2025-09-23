setTimeout(() => {
  console.log("This message will appear after 10 seconds");
}, 10000);

function help(name) {
  console.log(`Hello, ${name}`);
}

setTimeout(help, 2000, "Google");

let timeOut = setTimeout(() => {
  console.log("If you see this you're an alien");
}, 3000);

clearTimeout(timeOut);
console.log("Sorry");

let a = 0;
let int = setInterval(() => {
  console.log(`Interval message: ${++a}`);
}, 3000);

let c = 0;
let clear = setInterval(() => {
  console.log(`Counting ${++c}`);
  if (c === 10) {
    clearInterval(clear);
    console.log("You are late");
  }
}, 3000);
