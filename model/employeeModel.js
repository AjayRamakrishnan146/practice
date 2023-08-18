const mongoose = require('mongoose');
const employeeSchema = mongoose.Schema({
    userId:String,
    name:{
        type: String,
        required:true
    },
    mail:{
        type: String,
        required:true
    },
    phone:{
        type: Number,
        required:true
    },
    location:{
        type: String,
        required:true
    },
    username:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    },
    publishedAt:{
        type:Date,
        default: new Date()
    }
});

const employeeModel= mongoose.model('lists',employeeSchema);
module.exports=employeeModel;