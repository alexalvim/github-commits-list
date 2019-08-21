const CLIENT_ID = 'Iv1.14caa12c79b7ba71';
const CLIENT_SECRET = 'a8857489f1daed680762453d91a7b44c758aaa9f';
const BASE_URL = 'https://api.github.com';

const searchUser = (user) => 
  fetch(`${BASE_URL}/search/users?q=${user}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`)
    .then(res => res.json());



const getUserRepositories = (user) => 
  fetch(`${BASE_URL}/users/${user}/repos?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`)
    .then(res => res.json());


const getRepositoryCommits = (user, repo) =>
  fetch(`${BASE_URL}/repos/${user}/${repo}/commits?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`)
    .then(res => res.json());

const searchCommit = (user, repo, commit) =>
  fetch(`${BASE_URL}/search/commits?q=repo:${user}/${repo}+${commit}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
    {
      headers: new Headers({
          "Accept": "application/vnd.github.cloak-preview",
        })
    })
    .then(res => res.json());

export {
  searchUser,
  getUserRepositories,
  getRepositoryCommits,
  searchCommit
}