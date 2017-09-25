//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

    if (err) {
        return console.log('Unable to connect to Mongo database server');
    }

    console.log('Connected to Mongo database server');

/*    db.collection('Todos').insertOne({
        text: "Finish Node course",
        completed: false
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert Todo.', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });*/

/*a
    db.collection('Users').insertOne({
        name: "Mark Lambert",
        age: 47,
        location: "UK"
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert User.', err);
        }

        console.log(result.ops[0]._id.getTimestamp());
    });
*/


    db.close();
});