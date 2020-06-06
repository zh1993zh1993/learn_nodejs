        
        // 1、判断服务器上面也没有upload目录，如果没有则创建这个目录，如果有的话不操作

        const fs=require('fs')
        var path='./upload'

        fs.stat(path,(err,data)=>{
            if(err){
                console.log(err)
                //执行创建目录
                mkdir(path)
                return
            }
           if(!data.isDirectory()){
        //首先删除文件 再去执行创建目录
        fs.unlink(path,(err)=>{
            if(!err){
                mkdir(path) 
            }else{
                console.log('请检查传入的数据是否正确')
            }
        })
          
           }
        })
            //  创建目录的方法
     function mkdir(dir){
         fs.mkdir(dir,(err)=>{
                console.log(err)
                return
         })
     }