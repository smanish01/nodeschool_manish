var mongo = require('mongodb').MongoClient

var url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url, function (err, db) {

    if (err) throw err

    var collection = db.collection('users')

   
    collection.insert(
        console.log(JSON.stringify({
            firstName: process.argv[2],
            lastName: process.argv[3]   
      })));

})
