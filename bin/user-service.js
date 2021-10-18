const axios = require('axios');

const getUserByUsername = (username) => {
    return axios.get(`https://api.github.com/users/${username}`)
        .then((response) => {
            const data = response.data;

            console.log(`Name:  ${data.name}`);
            console.log(`Company: ${data.company}`);
            console.log(`Email: ${data.email}`);
            console.log(`Number of followers: ${data.followers}`);
        });
};

const getRepositoriesByUsername = (username) => {
    return axios.get(`https://api.github.com/users/${username}/repos`)
        .then((response) => {
            const data = response.data;

            data.array.forEach((repo) => {
                console.log(`Repository name: ${repo.name}`);
                console.log(`Repository URL: ${repo.html_url}`);
                console.log(`Repository description: ${repo.description}`);
                console.log('\n');
            });
        });
};

module.exports = { getUserByUsername, getRepositoriesByUsername };
