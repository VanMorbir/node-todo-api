//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp',
                   (err, db) =>
{
  if(err)
  {
    return console.log('unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').find(
  // {
  //   _id: new ObjectID("59f5cab29a10ee2724228f3d")
  // }).toArray().then((docs) =>
  // {
  //   console.log('Todos:');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Todos').find().count().then((count) =>
  {
    console.log(`Todos count: ${countg}`);
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  //db.close();
});
