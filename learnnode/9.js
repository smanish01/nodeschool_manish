var http = require('http');

var bl = require('bl');

//1st server
http.get(process.argv[2], function callback 
    (response) { 

        response.pipe( bl(function (error,data1) { 

            if(error) throw error;

            data1 = data1.toString();

            console.log(data1);

            //2nd server call
            http.get(process.argv[3], function callback 
                (response) { 
            
                    response.pipe( bl(function (error,data2) { 
            
                        if(error) throw error;

                        data2 = data2.toString();

                        console.log(data2);
            
                        //3rd server call
                        http.get(process.argv[4], function callback 
                            (response) { 
                        
                                response.pipe( bl(function (error,data3) { 
                        
                                    if(error) throw error;
                        
                                    data3 = data3.toString();

                                    console.log(data3);
                                    
                                 }));
                        
                                response.on("error",() => console.log(error));
                             });   

                     }));
            
                     response.on("error",() => console.log(error));
                 });
         }));
       
        response.on("error",() => console.log(error));
     });