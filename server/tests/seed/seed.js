const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken');

const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/user');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();

const users = [
    {
        _id: userOneId,
        email: 'fu@fu.com',
        password: 'userOnePass',
        tokens: [{
            access: 'auth',
            token: jwt.sign({_id: userOneId, access: 'auth'},  'abc123secret').toString()
        }]
    }, {
        _id: userTwoId,
        email: 'fu2@fu.com',
        password: 'userTwoPass',
        tokens: [{
            access: 'auth',
            token: jwt.sign({_id: userTwoId, access: 'auth'},  'abc123secret').toString()
        }]
    }
];

const todos = [{
    _id: new ObjectID(),
    text: 'First task to do',
    _creator: userOneId
}, {
    _id: new ObjectID(),
    text: 'Second task to do',
    completed: true,
    completedAt: 333,
    _creator: userTwoId
}];

const populateTodos = (done) => {
    Todo.remove({}).then(() => {
        return Todo.insertMany(todos);
    }).then(() => done());
};

const populateUsers = (done) => {
    // Insert many won't call hashing middleware
    User.remove({}).then(() => {
       var userOne = new User(users[0]).save();
       var userTwo = new User(users[1]).save();

       return Promise.all([userOne, userTwo])
    }).then(() => done());
};


module.exports = {todos, populateTodos, users, populateUsers};