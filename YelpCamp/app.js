var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser"),
    mongoose   = require("mongoose")

    // config adicionais para para evitar erros.
mongoose.connect("mongodb://localhost:27017/yelp_camp",{ useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });

// schema setup

var campgroundsSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

// Criação do modelo
var Campground = mongoose.model("Campground", campgroundsSchema)

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


app.use(bodyParser.urlencoded({extended: true}));


app.use(express.static("partials")) 
app.set("partials", "/partials")
app.set("view engine", "ejs");
// <%- include("partials/header") %>


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
    Campground.findById(req.params.id , function(err, foundCampground){
        if(err){
            console.log('Error on id search!');
        } else {
            // renderiza o template 'show' com o campground encontrado
            res.render('show', {campground: foundCampground});
        }
    });
       


});



app.listen(3000,function (){  
    console.log("YelpCamp Server ON")
});