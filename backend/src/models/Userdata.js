
const mongoose = require("mongoose");
const validator = require('validator');


const Register = new mongoose.Schema({
    FName:{
        type:String,
        required:true
    },
    LName:{
        type:String,
        required:true
    },
    Number:{
        type:Number,
        required:true
    },
    Email:{
        type:String,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
               throw new Error("Email is invalid")
            }
           }
    },
    Age:{
        type:String,
        required:true
    },
    Bio:{
        type:String,
        required:true
    }
})

const register = new mongoose.model("AboutUserData",Register);
module.exports = register;