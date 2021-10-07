#!/usr/bin/env node

const program = require('commander');
const print = require('./print');
const printVersion = require('./print-version');
const ConfigurationService = require('./configuration-service');
var configuration = new ConfigurationService();
const getUsername = require('./get-username');

program
    .command('credits')
    .description('Displays github-cli credits')
    .action(function(){
        print();
    })

program
    .command('version')
    .description('Displays current version of the CLI')
    .action(function(){
        printVersion();
    })

program
    .command('create')
    .description('Create configuration')
    .argument('<username>', 'username')
    .argument('<token>', 'token')
    .action(function(username, token){
        configuration.createConfiguration(username, token);
    })

program
    .command('username')
    .description('Get user *username*')
    .argument('username' , 'user')
    .action(function(user){
        getUsername(user);
    })

program.parse(process.argv);

