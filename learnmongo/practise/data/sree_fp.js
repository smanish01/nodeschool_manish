var mongo = require('mongodb').MongoClient
 var db = 'mongodb://localhost:27017/learnyoumongo' 
 mongo.connect(db,function(err,dbase){ 
     if(err) throw err
      var mydb = dbase.db('learnyoumongo') 
      var x = mydb.collection('parrots')
       x.find({ 
           age : {$gt : +(process.argv[2]) } }, { name: 1, age: 1, _id: 0 }) .toArray(
               function(err, documents){ console.log(documents) 
                dbase.close(); }) })