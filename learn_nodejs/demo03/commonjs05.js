
// var db=require('db') 错误 因为nodejs 默认会找node_modules对应模块里面的index.js
// 所以要手动生成package.json来配置此js的路径
var db=require('db')
db.add()