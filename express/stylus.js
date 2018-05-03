var express = require('express')
var app = express()

app.use(require('stylus').middleware(process.argv[3]));
app.use(express.static(process.argv[3]));

app.listen(process.argv[2])
// var express = require('express')   
// var portNumber = process.argv[2]
// var pathToFile = process.argv[3] 

//     var app = express()
   
//     app.use(require('stylus').middleware('public'))

//     app.use(require('stylus').middleware(__dirname + pathToFile))

    

//     app.get(function(req, res){
//         console.log(res);
//     })

//     app.listen(portNumber)