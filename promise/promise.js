const getPromise = (ms, name) =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(`${name} resolved!`);
    }, ms);
  });

console.log(`${new Date().toLocaleTimeString()} started`);

getPromise(5000, "long promise").then(result => {
  console.log(new Date().toLocaleTimeString() + " " + result);
});

getPromise(3000, "short promise").then(result => {
  console.log(new Date().toLocaleTimeString() + " " + result);
});

// Promise.all([
//   getPromise(4000, "long promise"),
//   getPromise(2000, "short promise")
// ]).then(results => {
//   console.log(new Date().toLocaleTimeString() + " " + results.join(", "));
// });
