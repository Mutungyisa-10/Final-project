const mongoose =require('mongoose');
const { required } = require('nodemon/lib/config');

//creating the schema for register2 file
const signupSchema = mongoose.Schema({
  username:{
      type:String,
      //at is coming in, its a string and require 
  },
  email:{
      type:String,
      required:true
  },
  password:{
      type:String,
      required:true
  },
})
//the data th
const signup = module.exports = mongoose.model('Signup', signupSchema);