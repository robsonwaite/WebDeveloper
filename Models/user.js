// Config

var mongoose = require('mongoose');


// User - email, name 
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts:[{
        type: mongoose.Schema.Types.ObjectId, // id from posts
        ref: "Post"
    }]
});
// Generating Model. User
module.exports = mongoose.model('User', userSchema); // return