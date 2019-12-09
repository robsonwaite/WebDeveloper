// package express
var express = require("express");
var app = express();

// "/" => "Hi there!"
app.get("/", function(req, res){
    res.send("Hi There!");
});
// "/bye" => "Goodbye!"
app.get("/bye", function(req, res){
    res.send("Goodbye!");
});
// "/dog" => "Frase Tosca"
app.get("/dog", function(req, res){
    res.send("Frase Tosca");
});
// link dinamico
app.get("/:subname", function(req, res){
    // console.log(req.params); // req.params recebe os parametros incluidos no link
    var subname = req.params.name;
   
    res.send("Uma pagina com um link dinamico");
    res.send("Bem-Vindo a"+subname);
});
// para todos os outros * => precisa ser o ultimo GET <=
app.get("*", function(req, res){
    res.send("Pagina não encontrada!");
});












// ip.adress
app.listen(3000, function(){
    console.log("Servidor rodando na porta 3000");
});