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

  /*
  Basic Fetch Syntax:
  db.collection('Todos').find().toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (error) => {
    console.log('Unable to fetch todos', error);
  });
  */

  /*
  Basic Querying Syntax
  db.collection('Todos').find({completed: false}).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (error) => {
    console.log('Unable to fetch todos', error);
  });
  */

  /*
  Querying for _id
  db.collection('Todos').find({
    _id: new ObjectID('5c287368094a74f41995e090')
  }).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (error) => {
    console.log('Unable to fetch todos', error);
  });
  */

  db.collection('Todos').find().count().then((count) => {
    console.log(`Todos count: ${count}`);
  }, (error) => {
    console.log('Unable to fetch todos', error);
  });


  //client.close();
});
