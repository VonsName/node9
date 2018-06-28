let mongoose=require('mongoose');
let dbs=require('./mongodb');
let subSchema = new mongoose.Schema(
    {
        subject:String,
        teacher:String
    }
);
let Subject = dbs.model('Subject',subSchema);
module.exports=Subject;