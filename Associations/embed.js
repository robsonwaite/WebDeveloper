var mongoose = require('mongoose');
// Conexão com mongoDB - opções adicionais para evitar warnings
mongoose.connect('mongodb://localhost:27017/blog_demo',{ useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
// Config para o uso de files .ejs
//app.set('view engine', 'ejs');
// ___________________________________________________________________________________________

// Post - title and content

var postSchema = new mongoose.Schema ({
    title: String,
    content: String
});

// Generating Model. Post

var Post = mongoose.model('Post', postSchema);

// User - email, name 
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    empresa: String,
    posts:[postSchema]
});
// Generating Model. User
var User = mongoose.model('User', userSchema);


//user example
// var newUser = new User({
//     email: 'jack@gmail.com',
//     name: 'Jack Doe',
//     empresa: 'Jack Enterprise'
// });

// newUser.posts.push({
//     title:'How do bre polyjuice potion',
//     content: 'Just Kidding. Go to potions class to learn it!'
// })


// Save new user
// newUser.save(function(err, user){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(user);
//     } 
// });

// post example
// var newPost = new Post({
//     title: 'Refletions on Apples',
//     content: 'They are delicious'
// });

// newPost.save(function(err, post){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });


// find User
// User.findOne({name: 'Jack Doe'}, function(err, user){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });

// find User
User.findOne({name: 'Jack Doe'}, function(err, user){
    if(err){
        console.log(err);
    } else {
        user.posts.push({
            title:'Three things i really hate',
            content: 'Voldemort, Voldemort Voldemort'
        });
        user.save(function(err, user){
            if(err){
                console.log(err);
            } else {
                console.log(user);
            }
        });
    }
});