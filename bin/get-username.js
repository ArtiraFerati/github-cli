const axios = require('axios');

module.exports = function(user) {
    return axios.get('https://api.github.com/users/' + user)
        .then((response) => {
            console.log("Name: " + response.data.name);
            console.log("Company: " + response.data.company);
            console.log("Email: " + response.data.email);
            console.log("Number of followers: " + response.data.followers);
        });
}