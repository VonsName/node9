let mongoose=require('mongoose');
let dbs=require('./mongodb');
let studentSchema=new mongoose.Schema(
    {
        username:String,
        age:Number,
        sex:String
    }
);
let StudentModel=dbs.model('Student',studentSchema);
module.exports=StudentModel;