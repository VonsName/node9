const mongoClient=require('mongodb').MongoClient;
function _connectMongo() {
    let url="mongodb://47.106.13.245:27017/node";
    mongoClient.connect(url,(err,db,callback)=>{
        if (!err){
            console.log('连接成功');
        }else{
            console.log(err);
        }
        callback(err,db);
    });
}

exports.insertOne=function (collectionName,json,callback) {
    _connectMongo(function (err,db) {
        db.collection(collectionName).insertOne(json,(err,result)=>{
            callback(err,result);
            db.close();
        })
    });
};