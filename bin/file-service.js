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
        return data.toString();
    };

    exists(path){
        if (fs.existsSync(path)){
            return true;
        }
        else{
            return false;
        }
    };
}

module.exports = FileService;