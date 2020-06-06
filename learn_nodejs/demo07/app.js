// 2、wwroot文件夹下面有images css js 以及index.html，找出wwroot目录下面所有的目录，然后放在一个数组中
const fs=require('fs')

/*
 1、改造for循环 递归实现 
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
*/
// 2、nodejs里面的新特性 async await

// (1)、定义一个isDir的方法判断一个资源到底是目录还是文件

async function isDir(path){
     return new Promise((resolve,reject)=>{
        fs.stat(path,(error,stats)=>{
            if(error){
                console.log(error)
                reject(error)
                return
            }
            if(stats.isDirectory()){
               resolve(true)
            }else{
                resolve(false)
            }
        
        })
     })
}

// (2)、获取wwwroot里面的所有资源 循环遍历

function main(){
    var path='./wwwroot'
    var dirArr=[]
    fs.readdir(path,async (err,data)=>{
        if(err){
            console.log(err)
            return
        }
        for(var i=0;i<data.length;i++){
                if(await isDir(path+'/'+data[i])){
                    dirArr.push(data[i])
                }
        }
        console.log(dirArr)
    })
}
main()

