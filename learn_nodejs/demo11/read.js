let fs = require('fs');
// 创建读取流 语法 fs.createReadStream(路径，可选配置项)
//  let rs =  fs.createReadStream('hello.txt',{flags:"r",encoding:"utf-8"});
let rs =  fs.createReadStream('snake.mp4',{flags:"r"});

//  console.log(rs);
 rs.on("open",()=>{
     console.log("读取的文件已打开")
 })
 rs.on("close",()=>{
     console.log("读取流结束")
 })
//  每一次数据流入完成
 rs.on('data',(chunk)=>{
     console.log("单批数据流入"+chunk.length)
     console.log(chunk)
     WSH.write(chunk,()=>{
         console.log("单批数据流入完成")
     })
 })