var http = require('http');
var map = require('through2-map');
var portNumber = process.argv[2];

var server = http.createServer(function (req, res) {

    if(req.method == 'POST') {
        req.pipe(map(function (chunk) {
                return chunk.toString().toUpperCase();
     
               })).pipe(res)
            }

    else {
        res.writeHead(405, {'Content-Type': 'text/plain'});
        res.end();
    }
    })
    server.listen(portNumber);