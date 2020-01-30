// Config Variables 
var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser"),
    mongoose   = require("mongoose"),
    Campground = require('./models/campground'),
    Comment    = require('./models/comment'),
    seedDB     = require('./models/seeds')

    // config adicionais para para evitar erros.
mongoose.connect("mongodb://localhost:27017/yelp_camp",{ useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
// schema setup
// Campground.create({
//     name: "Ibitipoca - Acampamento",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQAglHxLdONqjPafx_lYDdM55VXaQIF_wS6MBp-YC8Vy_-6wVkz",
//     description: "Ea eiusmod occaecat nisi laborum laboris do quis eu ullamco."
// }, function (err, campground){  
//     if(err){
//         console.log(err);
//     } else {
//         console.log("Newly Created Campground");
//         console.log(campground)
//     }
// });
// Config paste and bodyParser________________________________________________________________ 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("partials"))
app.use(express.static(__dirname + '/public')) 
app.set("partials", "/partials")
app.set("view engine", "ejs");
//____________________________________________________________________________________________
seedDB();

// <%- include("partials/header") %> // obs of include syntax
// Removido com a implementação da DB
// var campgrounds = [ 
//     {name: "Camp 1", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQAglHxLdONqjPafx_lYDdM55VXaQIF_wS6MBp-YC8Vy_-6wVkz"},
//     {name: "Camp 2", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQAglHxLdONqjPafx_lYDdM55VXaQIF_wS6MBp-YC8Vy_-6wVkz"},
//     {name: "Camp 3", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQAglHxLdONqjPafx_lYDdM55VXaQIF_wS6MBp-YC8Vy_-6wVkz"}
// ]
app.get("/", function (req, res){
    res.render("landings");
  });
 // INDEX - show all campgrounds 
app.get("/campgrounds", function (req,res){  
    // buscar dados no MongoDB
    Campground.find({}, function (err, allCampgrounds){  
        if(err){
            console.log('Error!');
        } else {
            res.render("campgrounds", {campgrounds: allCampgrounds});
            
        }
    });


    // res.render("campgrounds", {campgrounds: campgrounds});
});
// CREATE - add campgrounds to Database
app.post("/campgrounds", function (req, res){  
  var name = req.body.name; 
  var image = req.body.image;
  var description = req.body.description;
  var newCampground =  {name: name, image: image, description:description};
  Campground.create(newCampground, function(err, newlyCreated){
    if(err){
        console.log('Error - dados em branco');
    } else {
        res.redirect("/campgrounds");
    }
  }); 

//   campgrounds.push(newCampground); isso não passa os dados para o a database MongoDB
   
});
// NEW form to add a new campground to DB
app.get("/campgrounds/new", function (req, res){  
    res.render("new.ejs");
});
// :id pode ser qualquer coisa. Por isso é necessario
// declarar o / new previamente a ele.
// SHOW - show more info about the campgrounds
app.get("/campgrounds/:id", function(req, res){
    // procura a id usando recursos do mongoDB
    Campground.findById(req.params.id).populate('comments').exec(function(err, foundCampground){
        if(err){
            console.log('Error on id search!');
        } else {
            // renderiza o template 'show' com o campground encontrado
            res.render('show', {campground: foundCampground});
        }
    });
       


});

// =======================
// Comment's Routes
// =======================

app.get('/campgrounds/:id/comments/new', function(req, res){
    Campground.findById(req.params.id, function (err, campground){  
        if(err){
            console.log(err);
        } else {
            res.render("comment/new", {campground: campground})
        }
    });
});


// ++++++++++++++++++++++++++++Encontrar ERR0 +++++++++++++++++++++++++++++++++++//
// app.post('/campgrounds/:id/comments', function (req,res){
//     Campground.findById(req.params.id, function (err, campground){
//         if(err){
//             console.log(err);
//             res.redirect('/campgrounds');
//         } else {
//             // console.log(req.body.comment);
//             Comment.create(req.body.comment, function (err, comment){  
//                 if(err){
//                     console.log(err);
//                 } else {
//                     campground.commments.push(comment);
//                     campground.save();
//                     res.redirect('/campgrounds/' + campground._id);
//                 }
//             });
//         }
//     });
// });
// ++++++++++++++++++++++++++++Encontrar ERR0 +++++++++++++++++++++++++++++++++++//

app.post("/campgrounds/:id/comments", function(req, res){
    //lookup campground using ID
    Campground.findById(req.params.id, function(err, campground){
        if(err){
            console.log(err);
            res.redirect("/campgrounds");
        } else {
         Comment.create(req.body.comment, function(err, comment){
            if(err){
                console.log(err);
            } else {
                campground.comments.push(comment);
                campground.save();
                res.redirect('/campgrounds/' + campground._id);
            }
         });
        }
    });
    //create new comment
    //connect new comment to campground
    //redirect campground show page
 });


// Config Connect
app.listen(3000,function (){  
    console.log("YelpCamp Server ON")
});