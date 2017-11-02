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

  db.collection('Todos')
  .findOneAndUpdate(
    {
      _id: new ObjectID('59f8534fbe6535176817deb6')
    },
    {
      $set:
      {
        completed: true
      }
    },
    {
      returnOriginal: false
    }
  ).then((result) =>
    {
      console.log(result);
    });

  //db.close();
});
