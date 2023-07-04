getUser(400, (user) => {
  console.log(user);
  getRepos(user, (repos) => {
    console.log(repos);
    getCommits(user, (commits) => {
      console.log(commits);
    });
  });
});

function getUser(id, callback) {
  console.log("getting user...");
  setTimeout(() => {
    callback({
      name: "mostafa",
      email: "test-test@test.com",
      github: "mostafa-meerzad",
    });
  }, 2000);
}

function getRepos(user, callback) {
  console.log("getting repos for: ", user.name);
  setTimeout(() => {
    callback(["repo1", "repo2", "repo3"]);
  }, 2000);
}

function getCommits(user, callback) {
  console.log("getting commits...");
  setTimeout(() => {
    callback(["commit1", "commit2", "commit3"]);
  }, 2000);
}
