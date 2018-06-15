const mongoose=require('mongoose');
const express=require('express');
const app=express();

mongoose.connect('mongodb://47.106.13.245:27017/node');
// let Schema=mongoose.Schema;
// let mySchema = new Schema({
//     title:  String,
//     author: String,
//     body:   String,
//     comments: [{ body: String, date: Date }],
//     date: { type: Date, default: Date.now },
//     hidden: Boolean,
//     meta: {
//         votes: Number,
//         favs:  Number
//     }
// });
let schema1 = new mongoose.Schema({ num:Number, name: String, size: String});
let MyModel = mongoose.model('MyModel', schema1);
let doc1 = new MyModel({ size: 'small' });
doc1.save((err,res)=>{
   if (err){
       console.log('失败');
   } else {
       console.log('成功插入数据：'+res.insertedCount);
   }
});
let doc2=new MyModel({num:1,name:"毛毛",size:"big"});
doc2.save((err,res)=>{
   if (!err){
       console.log('success');
   }
});
/*
mongoose.Collection('node').find().toArray((err,data)=>{
   if (!err){
       console.log(data);
   } else {
       console.log('失败')
   }
});*/
app.use(express.static('./public'));
app.listen(8080);