#!/usr/bin/env node

const program = require('commander');
const print = require('./print');
const printVersion = require('./print-version');
const ConfigurationService = require('./configuration-service');
var configuration = new ConfigurationService();
const getUser = require('./user-service');

program
    .command('credits')
    .description('Displays github-cli credits')
    .action(() => print.displayCredits())

program
    .command('version')
    .description('Displays current version of the CLI')
    .action(() => printVersion.version())

program
    .command('create')
    .description('Create configuration')
    .argument('<username>', 'username')
    .argument('<token>', 'token')
    .action((username, token) => {
        configuration.createConfiguration(username, token);
    })

program
    .command('username')
    .description('Get user info')
    .argument('username' , 'user')
    .action(user => getUser.getUserByUsername(user))

program.parse(process.argv);


