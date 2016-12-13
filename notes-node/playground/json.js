const fs = require('fs');

// var obj = {
//   name: 'Tanim'
// };
//
// var stringObj = JSON.stringify(obj);
// console.log(stringObj);
// console.log(typeof stringObj);
//
// var personString = '{"name":"Tanim","age": 28}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

let originalNote = {
  title: 'Some title',
  body: 'Some body'
};

let originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('note.json', originalNoteString);

let noteString = fs.readFileSync('note.json');
let note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);
