// 路径模块和系统模块
let path = require("path");
let fs = require("fs");
// console.log(path)
let strPath = "http://www.xinhuanet.com/2020-05/29/c_1126049214.htm"
// 获取路径信息的扩展名
let info = path.extname(strPath);
console.log(info);
let arr = ['/sxt','qianduan','zhongji']
let info1 = path.resolve(...arr) //解析成路径
console.log(info1)

// 获取当前执行目录的完整路径
console.log(__dirname);
let info2 = path.join(__dirname,'/sxt','qianduan','zhongji')
console.log(info2);

let str = "http://www.sxt.com/news/internal.html";
// 解析出请求目录
let arrParse = str.split('/');
console.log(arrParse)
 arr = arrParse.slice(arrParse.length-3,arrParse.length);
console.log(arr);
let filePath = path.join(__dirname,...arr);
console.log(filePath)
fs.readFile(filePath,{encoding:"utf-8"},(err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
    
})