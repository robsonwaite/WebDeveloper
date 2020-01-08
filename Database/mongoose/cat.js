var mongoose = require('mongoose');
// conectar com servidor
mongoose.connect('mongodb://localhost/cat_app');
// Padrão dos dados 
var catSchema = new mongoose.Schema({
    name: String,
    age:Number,
    temperament: String
});
// Aplicando o padrão em um modelo 'Cat' carregando metodos
var Cat = mongoose.model('Cat', catSchema);

// var george = new Cat ({
//     name: 'Winfred',
//     age: 5,
//     temperament: 'Crazy Motherfucker'
// });

// george.save(function(err,cat){
//     if(err){
//         console.log('Something went wrong!');
//     } else {
//         console.log('File saved with sucess!');
//         console.log(cat);
//     }
// });

Cat.create({
    name: "Snow White",
    age: 15,
    temperament: "Bland"
}, function (err,cat){
    if(err){
        console.log('Error!')
    } else {
        console.log('Cat create!')
        console.log(cat)
    }
  })

// retorna toda informação adicionada 
Cat.find({}, function(err, cats){
    if(err){
        console.log('Error!');
        console.log(err);
    } else {
        console.log("All the cats....");
        console.log(cats)
    }
});