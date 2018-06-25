let mongoose=require('mongoose');
let dbs=mongoose.createConnection('mongodb://192.168.99.100:10001/node');
dbs.on('open', (callback)=> {
    console.log('数据库链接成功');
});
module.exports=dbs;