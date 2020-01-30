var mongoose = require('mongoose');

// schema setup

var campgroundsSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
    comments: [{
        type: mongoose.Schema.Types.ObjectId,  // associação do id
        ref: 'Comment'
    }]
});

// Criação do modelo
module.exports = mongoose.model("Campground", campgroundsSchema);
