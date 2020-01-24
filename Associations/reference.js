var mongoose = require('mongoose');
// Conexão com mongoDB - opções adicionais para evitar warnings
mongoose.connect('mongodb://localhost:27017/blog_demo_2',{ useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
// Config para o uso de files .ejs
//app.set('view engine', 'ejs');
// ___________________________________________________________________________________________
// Loading Models

var Post = require('./models/post');
var User = require('./models/user');

//------------------------------------------------------------------------------------------

// User.create({
//     email: 'bob@gmail.com',
//     name: 'Bob Jones'
// });

// Post.create({
//     title: 'Cillum ipsum ad proident officia incididunt exercitation amet ipsum aliquip occaecat pariatur in irure.',
//     content:"Laboris ex adipisicing officia eiusmod nostrud laborum qui incididunt. Nostrud reprehenderit id ex sunt ullamco non labore nostrud qui laborum ex irure. Ullamco fugiat non voluptate irure aute dolor. Eiusmod deserunt quis quis qui duis eu ad. Aliqua ipsum ullamco elit veniam ut et dolore nostrud occaecat anim sunt amet nisi cupidatat. Non Lorem ex nisi non sit veniam deserunt voluptate occaecat ad amet est nisi."
// }, function(err,post){
//     console.log(post);
// });

//

// Post.create({
//     title: 'Elit ea voluptate excepteur in nulla consequat elit duis do tempor aute aliquip non.',
//     content:'Eu tempor exercitation laborum reprehenderit non cillum quis excepteur do dolore aute pariatur. Culpa ut voluptate eu irure minim irure id veniam amet voluptate fugiat consequat esse sunt. Sunt ut dolore commodo id ea ipsum laborum qui laboris reprehenderit. Nostrud ipsum elit reprehenderit elit esse aute. Minim minim est ad ullamco aute enim eu dolor ad labore ullamco. Adipisicing laboris excepteur voluptate est elit nisi laboris cillum nostrud sit ullamco. Excepteur commodo ex cillum mollit Lorem veniam mollit magna consectetur amet et eu laborum.'
// }, function(err,post){
//     User.findOne({email: 'bob@gmail.com'}, function(err, foundUser){
//         if(err){
//             console.log(err);
//         } else {
//             foundUser.posts.push(post);
//             foundUser.save(function(err, data){
//                 if(err){
//                     console.log(err);
//                 } else {
//                     console.log(data);
//                 }
//             })
//         }
//     });
// });

// Find User
// Find all posts fot that user

User.findOne({email: 'bob@gmail.com'}).populate('posts').exec(function(err, user){
    if(err){
        console.log(err);
    } else {
        console.log(user);
    }
});

