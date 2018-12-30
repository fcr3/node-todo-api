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

  // findOneAndUpdate params - filter, update, options, callback
  // You can have more than one update operator in the update object param
  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5c287755094a74f41995e184')
  }, {
    $set: {
      completed: true
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  })

  //client.close();
});
