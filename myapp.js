const express=require('express');
const app=express();
let Student=require('./Students');
let lisi=new Student({"username":"李四","age":23,"sex":"男"});
lisi.save((err,res)=>{
   if (!err){
       console.log('成功');
   }
});
app.listen(8080);