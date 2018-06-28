let mongoose=require('mongoose');
let dbs=require('./mongodb');
let subSchema = new mongoose.Schema(
    {
        subject:String,
        teacher:String
    }
);
let studentSchema=new mongoose.Schema(
    {
        username:String,
        age:Number,
        sex:String,
        keCheng:[subSchema]
    }
);
studentSchema.methods.showInfo=function () {
    console.log(this.username);
};
let StudentModel=dbs.model('Student',studentSchema);
module.exports=StudentModel;