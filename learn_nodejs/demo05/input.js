let readline =require('readline') //导入readline包
// let {fsWrite} = require("./zhfs")
let {fsWrite} = require('./zhfs')
// 实例化接口对象
let r1 = readline.createInterface({
    output:process.stdout,
    input:process.stdin
})

// question 方法
// 设置r1 提问事件
    // r1.question("今晚吃啥？",function(answer){
    //         console.log("答复：",answer)
    // })
    function lcQuestion(){
        return new Promise((resolve,reject)=>{
            r1.question(title,function(answer){
                resolve(answer)
        })
        })
    }
   async function createPackage(){
     let name = await lcQuestion("您的包名叫什么？");
     let description = await lcQuestion("您的包如何描述？");
     let main = await lcQuestion("您的包主程序入口文件是什么？");
     let auther = await lcQuestion("您的包的作者是谁？");
     let content = `{
        "name": "${name}",
        "version": "1.0.0",
        "description": "${description}",
        "main": "${main}",
        "scripts": {
          "test": "echo "Error: no test specified" && exit 1"
        },
        "keywords": [],
        "author": "${auther}",
        "license": "ISC"
      }
      `
    await fsWrite('package.json')
   }
   createPackage();
   r1.close()
    // r1.on('close',function(){
    //         process.exit()
    // })
   