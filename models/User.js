
const { name } = require("ejs");
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/testapp");

const userSchema = mongoose.Schema({
    url:String,  // Actually we are writing the URL here
    email:String,
    name:String
})

module.exports=mongoose.model('user',userSchema)