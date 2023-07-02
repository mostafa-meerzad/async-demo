console.log("before");
// when we are calling an async function it doesn't execute right-away it just schedules a task to be perform in the future
// and when the interpreter is free and there is no synchronous task to perform that task is executed
getUser(400, displayUser);

function displayRepos(repos) {
  console.log(repos)
}

function displayUser(user) {
  console.log(user);
  gitRepositories(user, displayRepos)
}
console.log("after");

// in order to access data from an asynchronous operation we need to use one of the following methods
// - callbacks
// - promises
// - async/await

function getUser(id, callback) {
  setTimeout(() => {
    console.log("Getting a user from database...");
    // we have no access to this return value because it is run 2s latter 
    callback({ name: "mostafa", id: id, githubAccount: "mostafa-meerzad" });
  }, 2000);
}

function gitRepositories(user, callback){
    setTimeout(() => {
        console.log(`${user.name}'s repos`)
        callback(["repo1", "repo2", "repo3", "repo4"])
    }, 2000);
    
}