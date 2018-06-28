let mongoose=require('mongoose');
let dbs=mongoose.createConnection('mongodb://47.106.13.245:27017/node');
dbs.on('open', (callback)=> {
    console.log('数据库链接成功');
});
module.exports=dbs;