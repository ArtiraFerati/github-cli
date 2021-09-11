var FileService = require('./file-service');
var fs = require('fs');

var fileService = new FileService();

const os = require('os');
const homeDir = os.homedir();
const directory = 'gh';
const fullPath = `${homeDir}/${directory}/config`;

class ConfigurationService {
    createConfiguration(username, token){
        var content = { username, token }; 
        var stringifiedContent = JSON.stringify(content);

        if(!fileService.exists(fullPath)){
            fs.mkdirSync(`${homeDir}/${directory}`);
            fileService.writeStringFile(fullPath, stringifiedContent);
        }
        else {
            fileService.writeStringFile(fullPath, stringifiedContent);
        }  
    };

    readConfiguration(){
        var data = fileService.readStringFile(fullPath);
        return JSON.parse(data);
    }
}

module.exports = ConfigurationService;