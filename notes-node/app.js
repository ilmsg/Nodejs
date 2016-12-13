//console.log('Starting app.js');

const fs = require('fs');
// const os = require('os');
//const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');
const title = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
};

const body = {
  describe: 'Body of note',
  demand: true,
  alias: 'b'
};

const argv = yargs
  .command('add', 'Add a new note', {
    title: title,
    body: body
  })
  .command('list', 'List all notes')
  .command('read', 'Read a note', { title: title })
  .command('remove', 'Remove a note', { title: title})
  .help()
  .argv;

let command = argv._[0];


// let twoplustwo = notes.add(2,2);
// let filteredArray = _.uniq(['Tanim', 1 , 'Tanim', 1,2,3,4]);
// console.log(twoplustwo);
//
// let user = os.userInfo();
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
//console.log('Command:', command);

if (command === 'add') {
  let note = notes.addNote(argv.title, argv.body);
  if (typeof note === 'undefined'){
    console.log('Note title already exixts');
  } else {
    console.log('Note created')
    notes.logNote(note);
  }
} else if (command === 'list') {
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.filter((note) => notes.logNote(note));
} else if (command == 'read'){
  let note = notes.getNote(argv.title);
  if (note) {
    console.log('Note found')
    notes.logNote(note);
  } else {
    console.log('No note found!')
  }
} else if (command === 'remove') {
  let noteRemoved = notes.removeNote(argv.title);
  let message = noteRemoved ? 'Note was removed' : 'Note not found';
  console.log(message);
} else {
 console.log('Command not recongnized!')
}
