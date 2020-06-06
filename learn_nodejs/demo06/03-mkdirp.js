const mkdirp = require("mkdirp");

/*
1、找到地址：https://www.npmjs.com/package/mkdirp
2、安装：npm install mkdirp / npm i mkdirp（新版使用promise封装的） 
3、引入 var mkdir=require('mkdirp')
5、使用
*/  
// mkdirp('./upload').then(made =>
//     console.log(`made directories, starting with ${made}`))
/*
mkdirp('./upload').then((err)=>{
    if(err){
        console.log(err)
    }
})
————————————————————————
mkdirp('./uploadDir')//直接创建文件
 */
// 创建多个目录
mkdirp('./upload/aaa/xxx').then((err)=>{
    if(err){
        console.log(err)
    }
})