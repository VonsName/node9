let mongoose=require('mongoose');
let dbs=require('./mongodb');
let studentSchema=new mongoose.Schema(
    {
        username:String,
        age:Number,
        sex:String
    }
);
studentSchema.methods.showInfo=function () {
    console.log(this.username);
};
let StudentModel=dbs.model('Student',studentSchema);
module.exports=StudentModel;