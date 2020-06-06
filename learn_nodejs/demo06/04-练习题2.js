// 2、wwroot文件夹下面有images css js 以及index.html，找出wwroot目录下面所有的目录，然后放在一个数组中
const fs=require('fs')

/*
错误写法  注意：fs里面的方法是异步
var path='./wwwroot'
var dirArr=[]
fs.readdir(path,(err,data)=>{
        if(err){
            console.log(err)
        }
        
        for(var i=0;i<data.length;i++){
            fs.stat(path+'/'+data[i],(err,stats)=>{
                if(stats.isDirectory()){
                    dirArr.push(data[i])
                }
            })
        }
        console.log(dirArr) //打印为空
})
console.log(dirArr)

*/ 

// 1、改造for循环 递归实现  2、nodejs里面的新特性 async await
let path='./wwwroot'
let dirArr=[]
fs.readdir(path,(err,data)=>{
        if(err){
            console.log(err)
        }
        
       (function getDir(i){
           if(i==data.length){ //执行完成
            console.log(dirArr)
            return
           }
           //stats:统计数据
        fs.stat(path+'/'+data[i],(err,stats)=>{
            if(stats.isDirectory()){
                dirArr.push(data[i])
            }
        getDir(i+1)
        })
       })(0)   
})


