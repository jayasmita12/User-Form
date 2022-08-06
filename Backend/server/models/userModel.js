const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    gender:String,
    status:String
},{
    timestamps:true
})

const User = mongoose.model("user",userSchema)
module.exports=User