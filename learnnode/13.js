var http = require('http');
var map = require('through2-map');
var url = require('url');
var portNumber = process.argv[2];

var server = http.createServer(function (request, response) {

    response.writeHead(200, { 'Content-Type': 'application/json' });

    if(request.method == 'GET'){
        let link = url.parse(request.url, true);

        if(link.pathname == '/api/parsetime')
        {

            let date = new Date(link.query['iso']);

            var strObj = {
                "hour": date.getHours(),
                "minute": date.getMinutes(),
                "second": date.getSeconds()
            };

            response.write(JSON.stringify(strObj));

            response.end();

        }
        else if(link.pathname == '/api/unixtime')
        {
            let date = new Date(link.query['iso'])

            var strObj = { "unixtime": date.getTime() };

            response.write(JSON.stringify(strObj));

            response.end();
        }
    }

    })
    server.listen(portNumber);