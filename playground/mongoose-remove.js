const {mongoose} = require('./../server/db/mongoose');
const {ObjectID} = require('mongodb');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.deleteMany({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove


// Todo.findOneAndRemove({ _id: '5c29a469038348b838a75c23'}) ... 

Todo.findByIdAndRemove('5c29a469038348b838a75c23').then((todo) => {
  console.log(todo);
});
