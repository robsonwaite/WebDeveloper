// Configurações:
// Config Pacotes
var express     = require('express'),
    app         = express(),
    bodyParser  = require('body-parser'),
    methodOverride = require('method-override'),
    mongoose    = require('mongoose');
// Conexão com mongoDB - opções adicionais para evitar warnings
mongoose.connect('mongodb://localhost:27017/restful_blog_app',{ useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
// Config para o uso de files .ejs
app.set('view engine', 'ejs');
// Config pastas adicionais 
app.use(express.static('public'));
// Config o body parser 
app.use(bodyParser.urlencoded({extended: true}));
// Config Method Override
app.use(methodOverride('_method'));
//===========================================================================//
// Configurando Padrão de entrada de dados 
var blogSchema = new mongoose.Schema({
    title:   String,
    image:   String,
    body:    String,
    created: {type: Date, default:Date.now} // adiciona a data atual
});
// Configurando modelo de dados com o padrão de entrada de dados gerado
var Blog = mongoose.model('Blog', blogSchema);
// RESTful Routes ----------------------------------------------------------//
// Fazendo o Index ser a home page
app.get('/', function(req,res){
    res.redirect('/blogs');
});
// Criação da pagina index 
app.get('/blogs', function(req,res){
    Blog.find({}, function(err, blogs){
        if(err){
            console.log('Error on finding blogs');
        } else {
            res.render('index', {blogs: blogs});
        }
    })
});
// New Route - Formulario
app.get('/blogs/new', function (req, res){
    res.render('new')
});
// Create Route
app.post('/blogs', function (req,res){  
    Blog.create(req.body.blog, function (err, newBlog){  
        if(err){
            res.render('new');
        } else {
            res.redirect('/blogs');
        }
    });
});
// Show Route 
app.get('/blogs/:id', function (req,res){
 Blog.findById(req.params.id, function (err, foundBlog){  
     if(err){
        res.redirect("/blogs");
     } else {
        res.render("show", {blog: foundBlog});
     }
 });
});
// Edit Route
app.get('/blogs/:id/edit', function(req,res){
    // Encontrar a id do blog que esta sendo editado (?_method=PUT)
    Blog.findById(req.params.id, function(err, foundBlog){
        if(err){
            res.redirect('/blog');
        } else {
            res.render('edit', {blog: foundBlog});
        }
    });
});
// Update Route
app.put('/blogs/:id/', function(req, res){
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updateBlog){
        if(err){
            res.redirect('/blogs');
        } else {
           res.redirect('/blogs/' + updateBlog._id); // '+ req.params.id' o req.params.id esta pegando o msm id que apos modificado não existe mais 
        }
    });
});
// Delete Route
app.delete('/blogs/:id', function(req,res){
    Blog.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect('/blogs');
        } else {
            res.redirect('/blogs');
        }
    })
});

// Faltando o Sanitazer ...

// Estabelecendo conexão na porta 3000.
app.listen(3000,function (){  
    console.log("Blog Server is ON")
});

