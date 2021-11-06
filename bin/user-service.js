require('dotenv').config();

const axios = require('axios');
const githubApi =  process.env.GITHUB_API;

const getUserByUsername = (username) => {
    return axios.get(`${githubApi}/users/${username}`)
        .then((response) => {
            const data = response.data;
            console.log(`Name:  ${data.name}`);
            console.log(`Company: ${data.company}`);
            console.log(`Email: ${data.email}`);
            console.log(`Number of followers: ${data.followers}`);
        })
        .catch(() => {
            console.log("The username is wrong. Check for any typos.");
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
        })
        .catch(() => {
            console.log("The username is wrong. Check for any typos.");
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
                })
                .catch(() => {
                    console.log("The username or the repository name is wrong. Check for any typos.");
                });
        })
        .catch(() => {
            console.log("The username or the repository name is wrong. Check for any typos.");
        }); 
};

const getRepositoryPulls = async (username, repo) => {
    return axios.get(`${githubApi}/repos/${username}/${repo}/pulls`)
        .then((response) => {
            const data = response.data;

            data.forEach((item) => {
                console.log("Id:", item.id);
                console.log("Title:", item.title);
                console.log("User:", item.user.login);
                console.log("URL:", item.html_url);
                console.log("Created at:", item.created_at);
                console.log("State:", item.state + "\n");
            });
        })
        .catch(() => {
            console.log("The username or the repository name is wrong. Check for any typos.");
        });
};

const getRepositoryIssues = async (username, repo) => {
    return axios.get(`${githubApi}/repos/${username}/${repo}/issues`)
        .then((response) => {
            const data = response.data;

            data.forEach((item) => {
                console.log("Id:", item.id);
                console.log("Title:", item.title);
                console.log("User:", item.user.login);
                console.log("URL:", item.html_url);
                console.log("Created at:", item.created_at);
                console.log("Labels");
                item.labels.forEach((label) => {
                    console.log("Name: ", label.name);
                    console.log("Description: ", label.description);
                });
                console.log("State:", item.state + "\n");
            });
        })
        .catch(() => {
            console.log("The username or the repository name is wrong. Check for any typos.");
        });
};

const getRepositoryLicense = async (username, repo) => {
    return axios.get(`${githubApi}/repos/${username}/${repo}/license`)
        .then((response) => {
            const data = response.data;

            console.log("Name: ", data.license.name);
            console.log("URL:", data.html_url);
        })
        .catch(() => {
            console.log("The username or the repository name is wrong. Check for any typos.");
        });
};

const getRepositoryReleases = async (username, repo) => {
    return axios.get(`${githubApi}/repos/${username}/${repo}/releases`)
        .then((response) => {
            const data = response.data;

            data.forEach((item) => {
                console.log("URL:", item.html_url);
                console.log("Created at:", item.created_at);
                console.log("Author name: ", item.author.login + "\n");
            });
        })
        .catch(() => {
            console.log("No releases.");
        })
};

const getUserPackages = async (username) => {
    return axios.get(`${githubApi}/users/${username}/packages`)
        .then((response) => {
            const data = response.data;

            data.forEach((item) => {
                console.log("Type:", item.package_type);
                console.log("Owner:");
                console.log("Name:", item.owner.login);
                console.log("URL:", item.html_url);
                console.log("Created at:", item.created_at);
            })
        })
        .catch(() => {
            console.log("The username is wrong. Check for any typos.");
        })
};

module.exports = { getUserByUsername, getRepositoriesByUsername, getRepositoryInfo, getRepositoryPulls, getRepositoryIssues, getRepositoryLicense,  getRepositoryReleases, getUserPackages};

