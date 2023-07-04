// Promise is an object that holds the eventual result of an asynchronous operation

// A promise can be in one of three states
// - Pending => initial state, when we start an async operation
// - Resolved/ fulfilled => when we succeed performing the operation and in this state we have a value
// - Rejected/ failed => when something went wrong during the execution of the operation 

// make a new promise object
// Promise is a constructor object takes a function that has two arguments (resolve and reject)
// resolve and reject are basically functions that we call if promise is fulfilled or failed to fulfill
const myPromise = new Promise((resolve, reject)=>{
// resolve("result 1")
// make it a little real

setTimeout(() => {

    // resolve("result 1")
    // incase something goes wrong with the async operation
    reject(new Error("bro something went wrong check your code!!!"));
}, 2000);
})

// How to access the results of a Promise
// promise.then(callback(argument ){do something with the argument}) argument is getting passed from the promise body and we can get it in our callback

// How to know if there was an error
// promise.catch(callback(error){ usually we get an error object })

myPromise.then((result) => {
    console.log(result);
})
.catch((err) => {console.log("error message: ", err.message);})