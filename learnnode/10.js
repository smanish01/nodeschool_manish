var net = require('net');
var strftime = require('strftime');
var portNumber = process.argv[2];
var server = net.createServer(function (socket) {
    let data = strftime('%F %H:%M');
    data = data + "\n";

    socket.end(data);
})
server.listen(portNumber);