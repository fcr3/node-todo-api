var {mongoose} = require('./db/mongoose');

var newUser = new User({
  email: 'andrew@example.com'
});

var newTodo = new Todo({
  text: 'Cook dinner again again'
});

newTodo.save().then((doc) => {
  console.log('Saved todo', doc);
}, (e) => {
  console.log('Unable To save todo');
});

newUser.save().then((doc) => {
  console.log('User saved', doc);
}, (e) => {
  console.log('Unable to save user', e);
});
