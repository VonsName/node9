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
    dbo.collection("site"). find({}).toArray(function(err, result) { // 返回集合中所有数据
        if (err) throw err;
        console.log(result);
        db.close();
    });
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
   dbo.collection("site").find().sort(mysort).toArray((err,data)=>{
        if (!err){
            console.log(data)
        }
        db.close();
   })
});