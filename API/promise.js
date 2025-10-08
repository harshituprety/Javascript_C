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

//* Promise has state (pending,fullfiled) & some result(result for resolve & error for reject).
