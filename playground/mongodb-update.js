//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

    if (err) {
        return console.log('Unable to connect to Mongo database server');
    }

    console.log('Connected to Mongo database server');

    //findOneAndUpdate
/*    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('59c955dc66e0a2a30482bac3')
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    })*/

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('59c938ed4446b230061e5563')
    }, {
        $set: {
            name: 'Mark'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    })

    //db.close();
});