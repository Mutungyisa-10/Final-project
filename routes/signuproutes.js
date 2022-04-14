const bcrypt = require('bcryptjs/dist/bcrypt');
const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('signup')
});
const Register = require('../models/signupModel')

//accessing the mgtEntry page
router.get('/',(req, res)=>{
// we are rendering the register2 pug file
    res.render('signup')
});

// we are creating the route for the post method
router.post('/',(req,res)=>{
// declaration of variables that correspond to the
// names in the form.
const name = req.body.name
const email = req.body.email
const passport = req.body.password

// validation(optional)
// req.checkBody('bNumber','Battery number is required').notEmpty()
// req.checkBody('bSize','Battery size is required').notEmpty()
// req.checkBody('bPrice','Battery price is required').notEmpty()

// we are handling errors here
const errors = req.validationErrors()
if(errors){
res.render('signup')
}
else {
// we have a new variable assigning it 
    let newSignup = new Signup({
// value(property name from register schema):property(variable name)
        name:name,
        email:email,
        password:password
    });

//encrypting the password using bcrypt
bcrypt.gensalt(7, (err, salt)=>{
    bcrypt.hash(newSignup, password, (err, hash)=>{
        if (err) {
            console.error(err)
            return;
        }
        newSignup.password = hash;
    })
})


// saving our model to
   newSignup.save((err) => {
     if(err){
         console.error(err);
     return;
     }
     else {
        //we fisrt flash a message confirm the saving of a record
        //we stay @ the same form to register a new entity
        console.log('we have saved your data in the database')
        res.redirect('/login')
     }
   })
}
})

//we exposing our route to any file that will require it.
module.exports = router