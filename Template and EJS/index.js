var express = require("express");
var app = express();

// configurar uma nova pasta 
app.use(express.static("public")) // agora os arquivos existentes na pasta public serão utilizados
app.use(express.static("partials")) // agora os arquivos existentes na pasta partials serão utilizados
app.set("partials", "/partials")
// configurar a utilização de arquivos ejs
app.set("view engine", "ejs")

// >> Partials

// get recebe o endereço e envia uma resposta.
app.get("/", function(req, res){
    res.render("index") // renderiza o html.
    //o render ira procurar os arquivos em uma pasta chamada views
    //o nome da pasta então sera mandatorio, sem opção de customização.
});
// get recebe a variavel do link e envia pelo send.
app.get("/teste/:variavel", function (req, res){
    var variavel = req.params.variavel;
    // res.send("teste - "+ variavel); subsitituido por arquivo .ejs
    // instruções de java dentro do ejs que vai ser renderizado utilizam <% %> (para logicas etc) <%= %> (para display)
    res.render("getAnswer", {variavel:varr});
  });
  // pagina de post - reddit exemplo
app.get("/post", function (req, res) {
    var post = [
        {title: "Post1", author: "Susy"},
        {title: "Post2", author: "Joan"},
        {title: "Post3", author: "Marcy"}
    ];
    res.render("post", {post:post});

});

// o comando listen relaciona o arquivo js numero da porta nesse caso 3000.
app.listen(3000, function (){
    console.log("Server is listening");
  });