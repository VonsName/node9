var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://47.106.13.245:27017/node';
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("node");
    //var myobj = { name: "菜鸟教程", url: "www.runoob" };

    var myobj =  [
        { name: '菜鸟工具', url: 'https://c.runoob.com', type: 'cn'},
        { name: 'Google', url: 'https://www.google.com', type: 'en'},
        { name: 'Facebook', url: 'https://www.google.com', type: 'en'}
    ];

    //insertOne 插入单条数据
    //insertMany 插入多条数据
    /*dbo.collection("site").insertMany(myobj, function(err, res) {
        if (err) throw err;
        console.log("文档插入成功",res.insertedCount);
        db.close();
    });*/
    let whereStr={"name":'菜鸟工具'};
    /*dbo.collection("site"). find({}).toArray(function(err, result) { // 返回集合中所有数据
        if (err) throw err;
        console.log(result);
        db.close();
    });*/
    let updateStr={$set:{"name":"测试测试"}};
    //updateMany 更新多条数据
    //updateOne 更新一条数据
    /*dbo.collection("site").updateMany(whereStr,updateStr,(err,res)=>{
        if (err){
            console.log(err);
        } else {
            console.log('成功',res.result.nModified);
        }
        db.close();
    });*/

    //deleteOne
   /* dbo.collection("site").deleteMany(whereStr,(err,res)=>{
        console.log('成功',res.deletedCount);
        db.close();
    });*/
   let mysort={"name":1};
   // dbo.collection("site").find().sort(mysort).toArray((err,data)=>{
   //      if (!err){
   //          console.log(data)
   //      }else {
   //          console.log('失败');
   //      }
   //      db.close();
   // });

    //分页
    /*dbo.collection("site").find().limit(1).toArray((err,res)=>{
        if (!err){
            console.log(res);
        } else {
            console.log('失败');
        }
        db.close();
    });*/
    //跳过前面2条数据
    /*dbo.collection("site").find().skip(2).limit(2).toArray((err,res)=>{
        if (!err){
            console.log(res);
        } else {
            console.log('失败');
        }
        db.close();
    });*/

   /* let order={"id":1,"name":"order","productId":5};
    dbo.collection("orders").insertOne(order,(err,res)=>{
        if (err){
            console.log('错误');
        } else {
            console.log(res.insertedCount);
        }
    });

    let products={"id":5,"name":"手机"};
    dbo.collection("products").insertOne(products,(err,res)=>{
        if (err){
            console.log('错误');
        } else {
            console.log(res.insertedCount);
        }
    });*/

    //左链接查询
    dbo.collection("orders").aggregate(
        [
            {
                $lookup:{
                    from:'products',//右集合
                    localField:'productId',//左集合join字段
                    foreignField:"id",//右集合主键
                    as:"orderDetails"
                }
            }
        ],
        (err,data)=>{
        if (err){
            console.log('错误');
        } else {
            console.log(data);
        }
    });
});