const chalk = require('chalk');

const displayCredits = () => {
    console.log(chalk.green("=============================\n"));
    console.log(chalk.green("GITHUB CLI \nProvided by Drixy Studios"));
    console.log(chalk.green("\n============================="));
}

module.exports = { displayCredits };