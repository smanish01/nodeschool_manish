var mongo = require('mongodb').MongoClient

var url = 'mongodb://localhost:27017/learnyoumongo';

    mongo.connect(url, function(err, db) {
      
          var parrots = db.collection('parrots');

         parrots.find({
            'age': { $gt: parseInt(process.argv[2]) } 
          }).toArray(function(err, documents) {

            console.log(documents);

            db.close();
          
          })

    })

