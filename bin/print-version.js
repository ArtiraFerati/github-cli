module.exports = function() {
    const jsonFile = require('../package.json');
    console.log("Current CLI version is " + jsonFile.version);
}