var mongoose = require('mongoose');
// User model
  // email - require it - trim it - type - string - min - 1
  //

var User = mongoose.model('User',{
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
});

var newUser = new User({
  email: 'tanimmahmud08@gmail.com'
});

// newUser.save().then((doc)=>{
//   console.log(doc);
// }, (err)=>{
//   console.log("Unable to save user: ", err.message);
// })

module.exports = { User };
