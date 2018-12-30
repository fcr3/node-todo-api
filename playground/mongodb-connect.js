const {MongoClient, ObjectID} = require('mongodb');
// line above equal to: const MongoClient = require('mongodb').MongoClient;

/*
Example of Object Destructuring:
var user = {name: 'andrew', age: 25};
var {name} = user;
*/


MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (error, client) =>  {
  if (error) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');


  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // })

  // db.collection('Users').insertOne({
  //   name: 'Christian',
  //   age: 19,
  //   location: 'Portland'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });


  // How to extract information from the _id field of an object
  db.collection('Users').insertOne({
    name: 'Forrest',
    age: 19,
    location: 'Portland'
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert todo', err);
    }
    console.log(result.ops[0]._id.getTimestamp());
  });

  client.close();
});
