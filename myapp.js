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
lisi.showInfo();
app.listen(8080);