var http = require('http');
var fs = require('fs');
var portNumber = process.argv[2];
var pathToFile = process.argv[3];

var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/plain' })
    fs.createReadStream(pathToFile).pipe(res);
})
server.listen(Number(portNumber));