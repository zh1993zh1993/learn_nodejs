/*
Nodejs的文件操作
1.fs.stat 检测是文件还是目录
2.fs.mkdir 创建目录
3.fs.writeFile 创建写入文件
4.fs.appendFile 追加文件
5.fs.readFile 读取文件
6.fs.readdir 读取目录
7.fs.rename 重命名
8.fs.rmdir 删除目录
9.fs.unlink 删除文件
*/ 
const fs=require('fs')
/*
1.fs.stat 检测是文件还是目录
是文件:false
是目录:true 
const fs=require('fs')
fs.stat('./html',(err,data)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(`是文件:${data.isFile()}`)
    console.log(`是目录:${data.isDirectory()}`)
}) 


const fs=require('fs')
fs.stat('./package.json',(err,data)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(`是文件:${data.isFile()}`)
    console.log(`是目录:${data.isDirectory()}`)
})
*/
// ---------------------------------------------------
// 2.fs.mkdir 创建目录
/*
path   将创建的目录路径
mode   目录权限（读写权限），默认777
callback   回调，传递异常参数err

const fs=require('fs')
fs.mkdir('./css',()=>{
    if(err){
        console.log(err)
        return
    }
    console.log('创建成功')
})
*/
// --------------------------------------------

/*
filename   (String)
data   (String|Buffer)
options    (Object)
*/




// 3.fs.writeFile 创建写入文件
/*
fs.writeFile('./html/index.html','你好nodejs',(err)=>{
            if(err){
                console.log(err)
                return
            }

        console.log('创建写入文件成功')
})
如果以前
    文件存在，那么直接替换，
    fs.writeFile('./html/index.html','你好nodejshahahah',(err)=>{
        if(err){
            console.log(err)
            return
        }

    console.log('创建写入文件成功')
    })
    */

/*
   4.fs.appendFile 追加文件
fs.appendFile('./css/base.css','body{color:red}',(err)=>{
    if(err){
        console.log(err)
        return
    }
    console.log('appendFile成功')
})
fs.appendFile('./css/base.css','h2{color:red}\n',(err)=>{
    if(err){
        console.log(err)
        return;
    }
    console.log('appendFile成功')
})
*/

// 5.fs.readFile 读取文件
/*
fs.readFile('./html/index.html',(err,data)=>{
    if(err){
        console.log(err)
        return;
    }
    console.log(data)
    console.log(data.toString())//将Buffer转换成string类型
})
*/
// 6.fs.readdir 读取目录  [ 'index.html', 'js', 'news.html' ]
/*
fs.readdir('./html',(err,data)=>{
    if(err){
        console.log(err)
        return;
    }
    console.log(data)
}) */

// 7.fs.rename 重命名  功能1、表示重命名 2、移动文件
/*
功能1、表示重命名 
fs.rename('./css/aaa.css','./css/index.css',(err)=>{
    if(err){
        console.log(err)
        return;
    }
    console.log('重命名成功')

    2、移动文件
    fs.rename('./css/index.css','./html/index.css',(err)=>{
    if(err){
        console.log(err)
        return;
    }
    console.log('移动文件成功')
})
})
*/

/*
8.fs.rmdir 删除目录，如果里面有文件不能直接删除，只能先删除文件
9.fs.unlink 删除文件
fs.unlink('./aaa/index.html',(err)=>{
    if(err){
        console.log(err)
        return;
    }
    console.log('删除文件成功')
})
fs.rmdir('./aaa',(err)=>{
    if(err){
        console.log(err)
        return;
    }
    console.log('删除目录成功')
})

*/


