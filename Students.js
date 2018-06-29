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
/**
 * 定义普通方法
 */
studentSchema.methods.showInfo=function () {
    console.log(this.username);
};
studentSchema.methods.addKeCheng=function(subject,cb){
    this.keCheng.push(subject);
    this.save(function () {
        cb();
    });
};
/**
 * 定义静态方法
 * @param name
 * @param cb
 * @returns {*}
 */
studentSchema.statics.findByName=function (name,cb) {
  return this.find({username:new RegExp(name,'i')},cb)
};
let StudentModel=dbs.model('Student',studentSchema);
module.exports=StudentModel;