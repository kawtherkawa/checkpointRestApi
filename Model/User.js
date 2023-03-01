const  mongoose = require("mongoose")

const {Schema,model}=mongoose;

const UserSchema = new Schema({

    name:{
        type:String,
        required:true
    },
    email :{
    type : String,
    required:true,
    unique:true
    },
    phone:Number
})

module.exports=User=model("user",UserSchema)