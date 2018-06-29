const express=require('express');
const app=express();
let Student=require('./Students');
let Subject=require('./sub');
let subject = new Subject({"subject":"测试","teacher":"老王"});
let lisi=new Student({"username":"赵六","age":23,"sex":"男","keCheng":[subject]});
lisi.save((err,res)=>{
   if (!err){
       console.log('成功');
   }
});
/**
 * 使用类名静态方法
 */
Student.findByName('赵六',function (err,stu) {
   if (!err){
       console.log(stu);
   }
});
Student.findOne({'username':'王五'},function (err,stu) {
    console.log(stu);
    stu.username="啦啦啦";
    stu.save();
});
lisi.showInfo();
app.listen(8080);