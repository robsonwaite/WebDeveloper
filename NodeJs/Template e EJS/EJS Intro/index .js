var express = require("express");
var app = express();

// para utilizar outra pasta alem de views > o css
app.use(express.static("public"));
// para não ser necessario escrever ".ejs"
app.set("view engine", "ejs");


app.get("/", function (req,res){
    res.render("home");
});
app.get("/page2/:algo", function(req,res){
    var algo = req.params.algo;
    res.render("page2", {algo:algo});

});
app.get("/posts", function(req, res){
    var posts = [
        {title: "Post 1", author: "Robson"},
        {title: "Post 2", author: "Robson"},
        {title: "Post 3", author: "Robson"}
    ];
    res.render("ControlFlow", {posts:posts})
});


app.get("*", function(req, res){
    res.send("Pagina não encontrada!");
});
// ip.adress
app.listen(3000, function(){
    console.log("Servidor rodando na porta 3000");
});