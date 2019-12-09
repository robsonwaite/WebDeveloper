// package express
var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hi there, welcome to my assigment");
});

// link Speak
app.get("/speak/:animal", function(req, res){
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof",
        cat: "I hate u",
        goldfish: "..."    
    }
    var animal = req.params.animal.to.LowerCase();
    var sound = sounds[animal];
    res.send("O "+animal+" fala "+sound);
});

// link repeat
app.get("/repeat/:word/:number", function(req, res){
    var numberOfRepeat = Number(req.params.number);
    var wordLink = req.params.word;
    printWord = wordLink + " "
    res.send(printWord.repeat(numberOfrepeat));
});
// para todos os outros * => precisa ser o ultimo GET <=
app.get("*", function(req, res){
    res.send("Pagina não encontrada!");
});
// ip.adress
app.listen(3000, function(){
    console.log("Servidor rodando na porta 3000");
});