console.log("Hello1");
console.log("Hello2");
console.log("Hello3");

setTimeout(() => {
  console.log("Good Morning");
}, 5000);

console.log("Hello4");
console.log("Hello5");

function sum(a, b) {
  console.log(a + b);
}

function getData(dataId, getNextData) {
  setTimeout(() => {
    console.log("data", dataId);
    if (getNextData) {
      getNextData();
    }
  }, 2000);
}

getData(1, () => {
  getData(2, () => {
    getData(3, () => {
      getData(4);
    });
  });
});
