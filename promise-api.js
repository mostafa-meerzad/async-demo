// ------------------------------- settled promises ----------------------------

// If your ever need to make a settled promise (e,g) unit-test or checking if your code works as expected.
// Do it as follows:
// const myPromise = Promise.resolve("the value you want to return")

// The same goes for rejected promise.

// const myPromise2 = Promise.reject(new Error("the reason of error"))

// myPromise.then(function (result){
// console.log(result);
// })

// myPromise2.catch(err=>console.log(err))

// --------------------------------- parallel promises --------------------------

// If you are dealing with multiple promises and need to do something when all of them are fulfilled
// there is a method from Promise class that we can use

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolve message p1");
  }, 2000);
});
const p2 = new Promise((resolve, reject) => {
  resolve("resolve message p2");
});

// Promise.all takes an array of all the promises you want to wait for, and returns an array of all the values of passed promises

// Promise.all([p1, p2]).then((result) => {
//   console.log("p1: ", result[0]);
//   console.log("p2: ", result[1]);
// });

// Similarly we have Promise.race method which takes an array of promises and resolves as soon as one of 
// the passed promises resolve
// Returns the returned value of the first promise that resolves
Promise.race([p1, p2]).then((result)=>{
    console.log("p1 > ", result)
})