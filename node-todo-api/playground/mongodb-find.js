//const MongoClient = require('mongodb').MongoClient; - destructuring
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if (err){
    return console.log('Unable to connect MongoDB server');
  }
  console.log('Connect to MongoDB server');

  // db.collection('Todos').find({ _id : new ObjectID('5858c5bfac03a60b6e2bcdce')}).toArray().then((docs)=>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err)=>{
  //   console.log('Unable to fetch data', err);
  // });

  db.collection('Todos').find().count().then((count)=>{
    console.log(`Todos count : ${count}`);
  }, (err)=>{
    console.log('Unable to fetch data', err);
  });
  //db.close();
});
