var express = require('express')

var portNumber = process.argv[2]

    var app = express()
    
    app.set('views', process.argv[3])

    app.set('view engine', 'pug')

    app.get('/home', function (req, res) {
        res.render('index', {date: new Date().toDateString()})
      })

    
    
    app.listen(portNumber)