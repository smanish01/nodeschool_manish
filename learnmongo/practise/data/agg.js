var mongo = require('mongodb').MongoClient

var sizeValue = process.argv[2];

var url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url, function (err, db) {

    if (err) throw err

    var collection = db.collection('prices');


    collection.aggregate([
        { $match: { size : sizeValue }}
      , { $group: {
          _id: 'total' // This can be an arbitrary string in this case
        , total: {
            // $sum is the operator used here
            $avg: '$price'
          }
        }}
      ]).toArray(function(err, result) {
        if(err) throw err
        console.log(Number(result[0].total).toFixed(2));
        db.close();
      })
  

})
