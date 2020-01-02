// usando pacote request

var request = require("request");
request("https://www.google.com.br", function (error, response, body){
    if(error){
        console.log("Ocorreu um erro!");
        console.log(error);        
    } else {
        if(response.statusCode == 200) {
        // ou seja se o resquest funcionar...
            console.log(body)    
        }
    }
}); 