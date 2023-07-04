// Normal way of dealing with promises
// getUser(400)
//   .then((user) => getRepos(user))
//   .then((repos) => getCommits(repos))
//   .then((commits) => {
// console.log(commits);
//   }).catch(err=>console.log("Error ", err.message))

// Dealing with promises using async/ await
// handling the rejection of promises in async/await
async function displayUser() {
  try {
    const userName = await getUser(200);
    const repos = await getRepos(userName);
    const commits = await getCommits(userName);
    console.log(commits);
    console.log(repos);
  } catch (error) {
    console.log("--------------------------");
    console.log("Error:", error);
  }
}
displayUser();

function getUser(id) {
  return new Promise((resolve, reject) => {
    console.log("getting user...");
    setTimeout(() => {
      resolve({
        name: "mostafa",
        email: "test-test@test.com",
        github: "mostafa-meerzad",
      });
    }, 2000);
  });
}

function getRepos(user) {
  return new Promise((resolve, reject) => {
    console.log("getting repos for: ", user.name);
    setTimeout(() => {
      reject(new Error("couldn't get the repos"));
    }, 2000);
  });
}

function getCommits(user) {
  return new Promise((resolve, reject) => {
    console.log("getting commits...");
    setTimeout(() => {
      resolve(["commit1", "commit2", "commit3"]);
    }, 2000);
  });
}
