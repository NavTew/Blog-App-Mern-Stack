const mongoose = require('mongoose');
const { Schema, model } = mongoose; 

const UserSchema = new Schema({
    username: {type: String, required: true, min: 4, unique: true},
    password: {type: String, required: true},
});

const UserModel = model('User', UserSchema);

module.exports = UserModel; 

//In Node.js, module.exports is a special object that is 
// used to define what a module exports and makes available 
// through require(). 