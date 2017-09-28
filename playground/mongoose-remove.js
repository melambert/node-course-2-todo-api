const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//Todo.remove({}).then((result) => {
//    console.log(result);
//});

//Todo.findOneAndRemove((result) => {
//
//});

Todo.findOneAndRemove({_id: '59ccd506a2d04baa0820af2e'}).then((todo) => {

});

Todo.findByIdAndRemove('59ccd506a2d04baa0820af2e').then((todo) => {
    console.log(todo);
});