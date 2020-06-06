// 文件流

let fs = require('fs');
/* 写入流 
语法：fs.createWriteStream(文件路径，可选配置操作)
*/
let ws = fs.createWriteStream("hello.txt",{flags:"w",encoding:"utf-8"});
console.log(ws)
// 监听文件打开事件
ws.on('open',function(){
    console.log("文件打开")
})
ws.on('ready',function(){
    console.log("文件写入已准备状态")
})
// 监听文件关闭事件
ws.on('close',function(){
    console.log('文件写入完成，关闭')
})
// 文件流式写入
ws.write("Hello w or ld1",function(err){
    if(err){
        console.log(err)
    }
    console.log("内容流入1完成")
})
ws.write("Hello w or ld2",function(err){
    if(err){
        console.log(err)
    }
    console.log("内容流入2完成")
})
ws.write("Hello w or ld3",function(err){
    if(err){
        console.log(err)
    }
    console.log("内容流入3完成")
})
ws.write("Hello w or ld4",function(err){
    if(err){
        console.log(err)
    }
    console.log("内容流入4完成")
})
// 文件写入完成
ws.end(function(){console.log("文件写入完毕")})