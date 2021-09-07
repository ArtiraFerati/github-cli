#!/usr/bin/env node

const program = require('commander');

const print = require('./print');
const printVersion = require('./printVersion');
var fs = require('fs');

class FileService {
    writeStringFile(path, content){
        fs.writeFile(path, content, function(err){
            if(err) throw err;
            console.log('File is created successfully');
        })

    };

    readStringFile(path){
        var data = fs.readFileSync(path, 'utf-8');
        console.log(data.toString());
    };

    exists(path){
        if (fs.existsSync(path)){
            console.log('Exists');
        }
        else console.log('Doesn\'t exist');
    };
}

const newfile = new FileService();

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

program.parse(process.argv);

