#!/usr/bin/env node

const program = require('commander');
const print = require('./print');
const printVersion = require('./print-version');
const ConfigurationService = require('./configuration-service')

var configuration = new ConfigurationService();

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
        const os = require('os');

        console.log(os.homedir());
    })

program
    .command('create')
    .description('Create configuration')
    .argument('<username>', 'username')
    .argument('<token>', 'token')
    .action(function(username, token){
        configuration.createConfiguration(username, token);
    })

program.parse(process.argv);

