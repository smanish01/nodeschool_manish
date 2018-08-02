var mongo = require('mongodb').MongoClient

var age = parseInt(process.argv[2]);

var url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url, function (err, db) {

    if (err) throw err

    var collection = db.collection('parrots');


    collection.count({ age: { $gt: age } }, function (err, count) {

        if (err) throw err

        console.log(count);


        db.close();
    })

})
