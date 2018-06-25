const express=require('express');
const app=express();
let Student=require('./Students');
let lisi=new Student({"username":"王五","age":23,"sex":"男"});
lisi.save((err,res)=>{
   if (!err){
       console.log('成功');
   }
});
lisi.showInfo();
app.listen(8080);