var mongo = require('mongodb').MongoClient

var DBName = process.argv[2];

var collectionName= process.argv[3];

var id = process.argv[4]; 

var url = 'mongodb://localhost:27017/' + DBName;

mongo.connect(url, function (err, db) {

    if (err) throw err

    var collection = db.collection(collectionName);

   
    collection.remove( { _id : id },function(err){

          if (err) throw err

          db.close();
      })

})
