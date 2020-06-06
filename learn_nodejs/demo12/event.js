// 事件在node里面的应用
let events = require('events');
let fs = require("fs")
let ee = new events.EventEmitter();
ee.on("helloSuccess",(eventMsg)=>{
    console.log("1、吃夜宵")
    console.log(eventMsg)
})
ee.on("helloSuccess",()=>{
    console.log("2、唱歌")
})
ee.on("helloSuccess",()=>{
    console.log("3、打王者")
})
ee.on("helloSuccess",()=>{
    console.log("4、打dota")
})

function zhReadFile(path){
    return new Promise((resolve,reject)=>{
        fs.readFile(path,{encoding:"utf-8"},(err,data)=>{
            if(err){
                reject(err)
                console.log(err)
                 }else{
                    //console.log(data)
                    resolve(data)
                    //ee.emit("helloSuccess",data)
                 }
         
    })
    })
}
zhReadFile("hello.txt").then((data)=>{
    ee.emit("helloSuccess",data)
})
async function test(){
    let data = await zhReadFile("hello.txt");
    ee.emit("helloSuccess",data)
}
test()