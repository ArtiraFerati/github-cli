require('dotenv').config();

const axios = require('axios');
const githubApi =  process.env.GITHUB_API;

const getUserByUsername = (username) => {
    return axios.get(`${githubApi}/users/${username}`)
        .then((response) => {
            const data = response.data;
            console.log(githubApi);
            console.log(`Name:  ${data.name}`);
            console.log(`Company: ${data.company}`);
            console.log(`Email: ${data.email}`);
            console.log(`Number of followers: ${data.followers}`);
        });
};

const getRepositoriesByUsername = (username) => {
    return axios.get(`${githubApi}/users/${username}/repos`)
        .then((response) => {
            const data = response.data;

            data.forEach((repo) => {
                console.log(`Repository name: ${repo.name}`);
                console.log(`Repository URL: ${repo.html_url}`);
                console.log(`Repository description: ${repo.description}`);
                console.log('\n');
            });
        });
};

const getRepositoryInfo = async (username, repo) => {
    return axios.get(`${githubApi}/repos/${username}/${repo}`)
        .then((response) => {
            const data = response.data;
            console.log(`Repository name: ${data.name}`);
            console.log(`Languages: ${data.language}`);
            console.log(`Repository description: ${data.description}`);

            return axios.get(`${githubApi}/repos/${username}/${repo}/contributors`)
                .then((resp) => {
                    const contributionsData = resp.data; 

                    contributionsData.forEach((con) => {
                        console.log(`Repository contributors: ${con.login}`);
                        console.log(`Number of contributions: ${con.contributions}`); 
                    });
                });
        });
};

module.exports = { getUserByUsername, getRepositoriesByUsername, getRepositoryInfo };
