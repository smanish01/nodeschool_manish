var express = require('express')

var portNumber = process.argv[2]

    var app = express()
    
    app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));

    app.listen(portNumber)