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

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) => {
  //   console.log(result);
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
  //   console.log(result);
  // })

  // findOneAndDelete - deletes the object we want and returns interval
  // We can access deleted object by having access to it and then calling .value
  db.collection('Todos').findOneAndDelete({completed: true}).then((result) => {
    console.log(result);
  })

  //client.close();
});
