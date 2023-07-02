console.log("before");
// when we are calling an async function it doesn't execute right-away it just schedules a task to be perform in the future
// and when the interpreter is free and there is no synchronous task to perform that task is executed
setTimeout(() => {
    console.log("logging a message asynchronously");
}, 2000);

console.log("after");