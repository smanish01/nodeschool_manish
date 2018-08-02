var express = require('express')

var portNumber = process.argv[2]

    var app = express()
    
    app.get('/home', function(req, res) {
      res.end('Hello World!')
    })
    app.listen(portNumber)