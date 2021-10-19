#!/usr/bin/env node
/* eslint linebreak-style: ["error", "windows"] */

const program = require('commander');
const print = require('./print');
const printVersion = require('./print-version');
const ConfigurationService = require('./configuration-service');

const configuration = new ConfigurationService();
const getUser = require('./user-service');

program
  .command('credits')
  .description('Displays github-cli credits')
  .action(() => print.displayCredits());

program
  .command('version')
  .description('Displays current version of the CLI')
  .action(() => printVersion.version());

program
  .command('create')
  .description('Create configuration')
  .argument('<username>', 'username')
  .argument('<token>', 'token')
  .action((username, token) => {
    configuration.createConfiguration(username, token);
  });

program
  .command('username')
  .description('Get user info')
  .argument('username', 'user')
  .action((user) => getUser.getUserByUsername(user));

program
  .command('repositories')
  .description('Get user repositories')
  .argument('username', 'user')
  .action((user) => getUser.getRepositoriesByUsername(user));

program
  .command('repository')
  .description('Get repository info')
  .argument('username', 'user')
  .argument('repo', 'repo')
  .action((user, repo) => getUser.getRepositoryInfo(user, repo));

  
program
  .command('issues')
  .description('Get repository issues')
  .argument('username', 'user')
  .argument('repo', 'repo')
  .action((user, repo) => getUser.getRepositoryIssues(user, repo));


program.parse(process.argv);
