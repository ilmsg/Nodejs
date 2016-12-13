//console.log('Starting app.js');

const fs = require('fs');
// const os = require('os');
const _ = require('lodash');

const notes = require('./notes.js');

// var twoplustwo = notes.add(2,2);
// let filteredArray = _.uniq(['Tanim', 1 , 'Tanim', 1,2,3,4]);
// console.log(twoplustwo);
//
// var user = os.userInfo();
//
// fs.appendFile('greetings.txt', `Hello ${user.username} ! You are ${notes.age}`, function (err) {
//
//   if (err) {
//     console.log('Unable to write to file!');
//   }
//
// });

// console.log(_.isString(true));
// console.log(_.isString('Tanim'));
// console.log(filteredArray);
let command = process.argv[2];
//console.log('Command:', command);

if (command === 'add') {
  console.log('Adding new note');
} else if (command === 'list') {
  console.log('Listing all notes');
} else if (command == 'read'){
  console.log('Reading note');
} else if (command === 'remove') {
  console.log('Removing note')
} else {
 console.log('Command not recongnized!')
}
