// Config

var mongoose = require('mongoose');

// Post - title and content

var postSchema = new mongoose.Schema ({
    title: String,
    content: String
});

// Export => Generating Model. Post

module.exports =  mongoose.model('Post', postSchema); //return the model
 