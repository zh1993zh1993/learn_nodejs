    const fs = require('fs')
    function fsRead(paht){
        return new Promise((resolve,reject)=>{
            fs.readFile(path,{flag:'f',encoding:"utf-8"},function(err,data){
                if(err){
                    reject(err)
                }else{
                    resolve(data)
                }
            })
        })
    }
    function fsWrite(path,content){
        return new Promise((resolve,reject)=>{
            fs.writeFile(path,content,{flag:"a",encoding:"utf-8"},(err)=>{
                if(err){
                    reject(err)
                }else{
                    resolve(err)
                }
            })
        })
    }
    module.exports = {fsRead,fsWrite}