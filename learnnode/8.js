var http = require('http');

var bl = require('bl');

//1st server
http.get(process.argv[2], function callback 
    (response) { 

        response.pipe( bl(function (error,data) { 

            if(error) throw error;

            data = data.toString();

            console.log(data.length);

            console.log(data);
            
         }));


         response.on("error",() => console.log(error));

     }).on('error',console.error);