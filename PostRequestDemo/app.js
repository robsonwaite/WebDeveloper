var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var dogs = ["Ursula"];

app.use(bodyParser.urlencoded({extended: true}));


// config -> no needs for .ejs
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});



app.post("/addFriend", function(req, res){ 
    var newDog = req.body.newDog;
    dogs.push(newDog)
    res.redirect("/friends");
});

app.get("/friends", function (req, res){  
        
    res.render("friends", {friends:dogs} ); // o segundo irá se referenciar a nome da variavel acima.
});

app.listen(3000, function(){
    console.log("Server Online");
});