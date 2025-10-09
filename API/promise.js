let promise = new Promise((resolve, reject) => {
  console.log("Iam a promise");
  resolve("Success");
});

// A javascript Promise object can be:
// • Pending: The result is undefined
// • Resolved: The result is a value (fulfilled)
// • Rejected: The result is an error object

function getData(dataId, getNextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("sucess");
      if (getNextData) {
        getNextData();
      }
    }, 5000);
  });
}

// !Promise Chain
getData(1).then((res) => {
  console.log(res);
  getData(2).then(() => {
    console.log(res);
  });
});

getData(1)
  .then((res) => {
    return getData(2);
  })
  .then((res) => {
    return getData(3);
  })
  .then((res) => {
    console.log(res);
  });

//* Promise has state (pending,fullfiled) & some result(result for resolve & error for reject).

/* promise.then((res)=>{...})
  promise.catch((err)=>{...})
 */

let getPromise = () => {
  return new Promise((resolve, reject) => {
    console.log("I am a promise");
    resolve("success");
  });
};

let promise = getPromise();
promise.then((res) => {
  console.log("promise fulfilled", res);
});

promise.catch((err) => {
  console.log("rejected", err);
});

function asyncFunc1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data1");
      resolve("Success");
    }, 4000);
  });
}

function asyncFunc2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data2");
      resolve("Success");
    }, 4000);
  });
}

console.log("fetching data1....");
asyncFunc1().then((res) => {
  console.log("fetching data2....");
  asyncFunc2().then((res) => {});
});
