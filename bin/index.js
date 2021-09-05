#!/usr/bin/env node

const program = require('commander');

const print = require('../lib/print');
const printVersion = require('../lib/printVersion');

program
    .command('gh-credits')
    .description('Displays github-cli credits')
    .action(function(){
        print();
    })

program
    .command('gh-version')
    .description('Displays current version of the CLI')
    .action(function(){
        printVersion();
    })

program.parse(process.argv);