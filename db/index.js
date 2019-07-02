const mongo = require('mongodb').MongoClient;
const mongo_url = 'mongodb://localhost:27017';
// const mongoose = require('mongoose');
// const MONGO_HOSTNAME = '127.0.0.1';
// const MONGO_PORT = '27017';
const db_name = 'vueprojectDB';

const createUserDB = async (userdata) => {
  console.log('createUserDB called', userdata);

  mongo.connect(mongo_url, (err, client) => {
    if (err) {
      console.error('Error connecting to mongodb', err);
      return;
    }
    const db = client.db(db_name);
    const user_collection = db.collection('users');
    user_collection.insertOne(userdata, (err, result) => {
      if(err) {
        console.error('Error inserting userdata', err);
        return;
      }
      // console.log('inserted user', result.insertedId);
      return result.insertedId;
    })

  })
};

const findUsersDB = () => {
  return {'users': 'test_all_users'};
}

module.exports = {
  createUserDB,
  findUsersDB
};


// mongo.connect(mongo_url, (err, client) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log("connected to client");
//   const db = client.db('vueprojectDB');
//   const collection = db.collection('users');
//   const user = collection.find({'name': 'someUser'});
//   // console.log('user', user);
//   user.toArray((err, items) => {
//     console.log(items)
//   });
// });