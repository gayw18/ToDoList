var MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:8000/test', function (err, db) {
  if (err) throw err

  db.collection('mammals').find().toArray(function (err, result) {
    if (err) throw err

    console.log(result)
  })
})