var FileService = require('./file-service');

var fileService = new FileService();

class ConfigurationService {
    createConfiguration(username, token){
        var content = { username, token }; 
        var stringifiedContent = JSON.stringify(content);
        fileService.writeStringFile('./.gh/config', stringifiedContent);
    };

    readConfiguration(){
        var data = fileService.readStringFile('./.gh/config');
        return JSON.parse(data);
    }
}

module.exports = ConfigurationService;