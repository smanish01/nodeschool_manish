var fs = require('fs');
var path = require('path');
var pathToFile = process.argv[2];
var ext = '.'+process.argv[3];

fs.readdir(pathToFile, (error,list) => {
    if(error) throw error;
    list.filter(file => path.extname(file) == ext).map(e => console.log(e));
});