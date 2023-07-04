getUser(400)
  .then((user) => getRepos(user))
  .then((repos) => getCommits(repos))
  .then((commits) => {
    console.log(commits);
  }).catch(err=>console.log("Error ", err.message))

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
      resolve(["repo1", "repo2", "repo3"]);
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
