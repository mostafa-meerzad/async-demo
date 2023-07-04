// getUser(400, (user) => {
//     console.log(user);
//     getRepos(user, (repos) => {
//         console.log(repos);
//         getCommits(user, (commits) => {
//             console.log(commits);
//         });
//     });
// });
getUser(400).then(user => getRepos(user)
).then((repos) => getCommits(repos)
).then(commits => console.log(commits))
    .catch(err => {
        console.log(err)
    })

function getUser(id,) {
    console.log("getting user...");
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve({
                id,
                name: "mostafa",
                email: "test-test@test.com",
                github: "mostafa-meerzad",
            });
        }, 2000);
    })
}

function getRepos(user) {
    console.log("getting repos for: ", user.name);
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(["repo1", "repo2", "repo3"]);
        }, 2000);
    })
}

function getCommits(repo) {
    console.log("getting commits...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["commit1", "commit2", "commit3"]);
        }, 2000);
    })
}
