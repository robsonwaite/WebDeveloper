var express = require("express");
var app = express();
var bodyParser = require("body-parser");



app.use(bodyParser.urlencoded({extended: true}));


app.use(express.static("partials")) 
app.set("partials", "/partials")
app.set("view engine", "ejs");
// <%- include("partials/header") %>

var campgrounds = [ 
    {name: "Camp 1", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQAglHxLdONqjPafx_lYDdM55VXaQIF_wS6MBp-YC8Vy_-6wVkz"},
    {name: "Camp 2", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQAglHxLdONqjPafx_lYDdM55VXaQIF_wS6MBp-YC8Vy_-6wVkz"},
    {name: "Camp 3", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQAglHxLdONqjPafx_lYDdM55VXaQIF_wS6MBp-YC8Vy_-6wVkz"}
]


app.get("/", function (req, res){
    res.render("landings");
  });

app.get("/campgrounds", function (req,res){  
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function (req, res){  
  var name = req.body.name; 
  var image = req.body.image;
  var newCampground =  {name: name, image: image};
  campgrounds.push(newCampground);
  res.redirect("/campgrounds"); 
});

app.get("/campgrounds/new", function (req, res){  
    res.render("new.ejs");
});


app.listen(3000,function (){  
    console.log("YelpCamp Server ON")
});