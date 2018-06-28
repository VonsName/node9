const mongoose=require('mongoose');
const express=require('express');
const app=express();

mongoose.connect('mongodb://147.106.13.245:27017/node');
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

/**
 * 创建一个schema模版
 */
let schema1 = new mongoose.Schema({ num:Number, name: String, size: String});
/**
 * 这里相当于给MyModel添加一个方法 必须要在mongoose.model()之前
 */
schema1.methods.showInfo=function () {
  console.log('给schema1定义的展示信息的方法');
  console.log(this.num);
};
/**
 * 定义方法
 * @param callback
 */
schema1.methods.find=function (callback) {
  this.model('MyModel').find({"name":this.name},callback);
};
/**
 * 利用schema模版创建一个MyModel实例
 * @type {Model}
 */
let MyModel = mongoose.model('MyModel', schema1);

/**
 * 创建对象以及保存
 */
MyModel.create({"num":1,"name":"mod1","size":2});
/**
 * 查询
 */
MyModel.findOne({"name":"mod1"},function (err,res) {
    console.log(res);
});

/**
 * 使用model创建一个对象
 * @type {Model}
 */
let doc1 = new MyModel({ size: 'small' });
/**
 * 保存创建的对象
 */
doc1.save((err,res)=>{
   if (err){
       console.log('失败');
   } else {
       console.log('成功插入数据：'+res.insertedCount);
   }
});

/**
 * 使用定义好的方法查询doc1对象
 */
doc1.showInfo();

/**
 * 创建model对象
 * @type {Model}
 */
let doc2=new MyModel({num:1,name:"毛毛",size:"big"});
/**
 * 保存对象
 */
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