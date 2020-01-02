// usando pacote request

var request = require("request");
request("https://jsonplaceholder.typicode.com/users/1", function (error, response, body){
  eval(require("locus"));  
    if(!error && response.statusCode == 200){
        var ParsedData = JSON.parse(body);
        console.log(ParsedData[])
    }
}); 