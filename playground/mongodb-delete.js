//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

    if (err) {
        return console.log('Unable to connect to Mongo database server');
    }

    console.log('Connected to Mongo database server');

    //deleteMany
/*    db.collection('Todos').deleteMany({text: 'Increase knock'}).then((result) => {
        console.log(result);
    })*/

    // deleteOne
/*    db.collection('Todos').deleteOne({text: 'Increase knock'}).then((result) => {
        console.log(result);
    })*/

    //findOneAndDelete
/*
    db.collection('Todos').findOneAndDelete({text: 'Increase knock'}).then((result) => {
        console.log(result);
    })
*/

    db.collection('Users').deleteMany({name: 'SY'}).then((result) => {
        console.log(result);
    });

    db.collection('Users').deleteOne({
        _id: new ObjectID('59c93994e5f3f8300bcc65db')
    }).then((result) => {
        console.log(result);
    });

    //db.close();
});