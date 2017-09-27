const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '59cc02a1657f095506b2265c11';
//
// if (!ObjectID.isValid(id)) {
//     console.log('Id not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//    console.log('Todos', todos);
// });
//
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo By Id', todo)
// }).catch((e) => console.log(e));

id = '59c96bfa54e27d8634207186';

User.findById(id).then((user) => {
     if (!user) {
         return console.log('user not found');
     }
     console.log('User By Id', user)
 }).catch((e) => console.log(e));