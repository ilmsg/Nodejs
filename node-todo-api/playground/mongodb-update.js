//const MongoClient = require('mongodb').MongoClient; - destructuring
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if (err){
    return console.log('Unable to connect MongoDB server');
  }
  console.log('Connect to MongoDB server');

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("585a7b74235eca3b10ed3d00")
  }, {
    $set: {
      age: 27
    }
  },{
    returnOriginal: false
  }).then((result)=>{
    console.log(result);
  })

  //db.close();
});
