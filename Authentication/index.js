//Config - Packages
var express               = require('express'),
    app                   = express(),
    mongoose              = require('mongoose'),
    passport              = require('passport'),
    bodyParser            = require('body-parser'),
    LocalStrategy         = require('passport-local'),
    passportLocalMongoose = require('passport-local-mongoose'),
    User                  = require('./models/user') 
// Config Options
mongoose.connect("mongodb://localhost:27017/auth_demo_app",{ useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.use(require('express-session')({
    secret: "Lorem Ipsum",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



// =========================================
// Routes 
// =========================================

// Home Page
app.get('/', function (req, res){
    res.render('home');
});
// Secret Page 
app.get('/secret', isLoggedIn, function (req,res){  
    res.render('secret');
});
// Auth Routes

// Form Register
app.get('/register', function(req, res){
    res.render('register');
});

// Handling Sign Up
app.post('/register', function(req, res){
    req.body.username
    req.body.password
    User.register(new User({username: req.body.username}), req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render('register');
        } 
        passport.authenticate('local')(req, res, function(){
            res.redirect('/secret');
        });
    });
});
// Login Routes
app.get('/login', function(req, res){
    res.render('login');
});
app.post('/login',passport.authenticate('local', {
    successRedirect: '/secret',
    failureRedirect: '/login'
}), function(req,res){
});

// Logout

app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
});

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/login')
}


app.listen(3000,function (){  
    console.log("Authentication Demo Online....................");
});


