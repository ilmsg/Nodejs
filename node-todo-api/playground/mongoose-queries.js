const {ObjectID} = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user')

var id = '5cee96e3fdd69d5e2bfd75';
var userId = '585c7d60adf56b273962ab27';

// if(!ObjectID.isValid(id)){
//   console.log('ID not valid!');
// }

// mongoose find method

// Todo.find({
//   _id: id
// }).then((todos)=>{
//   console.log('Todos', todos);
// });

// mongoose findOne method

// Todo.findOne({
//   _id: id
// }).then((todo)=>{
//   console.log('Todo', todo);
// });


// mongoose findById

// Todo.findById(id).then((todo)=>{
//   if (!todo){
//     return console.log('Id not found!');
//   }
//   console.log('Todo', todo);
// }).catch((e)=> console.log(e));

// User.findById
  // 2 cases - user found/not found/valid id

User.findById(userId).then((user)=>{
  if (!user) {
    return console.log('Unable to find user');
  }

  console.log('User', user);
}).catch((e)=>{
  console.log(e);
});
