const {mongoose} = require('./../server/db/mongoose');
const {ObjectID} = require('mongodb');
const {Todo} = require('./../server/models/todo');

var id = '5c2935ae9235f41634a68d2b2';

if (!ObjectID.isValid(id)) {
  return console.log('ID not valid');
}

// Todo.find({
//   _id: new ObjectID(id)
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: new ObjectID(id)
// }).then((todo) => {
//   console.log('Todo', todo);
// });

Todo.findById(id).then((todo) => {
  if (!todo) {
    return console.log('Id not found');
  }
  console.log('Todo', todo);
}).catch((e) => console.log(e));
