// we are requiring our packages into the controller called app.js
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
// we are qualifying config to be a package but config package is
// our own i.e we just created it.
const config = require('./config/database');

//Create a model 
const Signup = require('./models/signupModel');

// route section (these are controllers)
 let loginRoutes = require('./routes/loginroutes')
const landingRoutes = require('./routes/landing')
const signupRoute =require('./routes/signuproutes')
const homeRoutes = require('./routes/homeoroute')
const app = express();
//creating a connection to the mongo database from the 
// controller(specifying its location)
mongoose.connect(config.database);
// Incase of a connection
const db = mongoose.connection;
db.once('open', ()=> {
    console.log('Connected to mongodb');
})
db.on('error', (err)=> {
    console.error('Connection error',err)
}) 

// setting up the view engine
app.engine('pug', require('pug').__express)
app.set('view engine','pug')
app.set('views', path.join(__dirname,'views'))

// bodyparser middleware section: This helps to clean data
// that is within the forms.
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

// setting directory for static files
app.use(express.static(path.join(__dirname, "public")));

// intsructing the controller to point the login file.
// @ this line below we are using middleware
 app.use('/login',loginRoutes)
 app.use('/landing',landingRoutes)
app.use('/signup',signupRoute)
app.use('/home',homeRoutes)

  
// this is a post route middleware whereas we are 
// using the same variable that we created
// for loginRoutes for it to work
// app.use('/form/submit',registerRoutes)

//establish the server listening port
app.listen(2003, ()=> {
    console.log('The server has started on port 2003')
})