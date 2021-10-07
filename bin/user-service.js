
const axios = require('axios');

const getUserByUsername = (username) => {
    return axios.get('https://api.github.com/users/' + username)
       .then((response) => {
           console.log("Name: " + response.data.name);
           console.log("Company: " + response.data.company);
           console.log("Email: " + response.data.email);
           console.log("Number of followers: " + response.data.followers);
       });
}

module.exports = { getUserByUsername };