const fs=require('fs')

var str=''

for(var i=0;i<500;i++){
    str+='我是从数据库获取的数据，我要保存起来\n'
}

var writeStream=fs.createWriteStream('./data/output.txt')

writeStream.write(str)

// 标记写入完成（文件末尾） 如果不加.end是不能触发下面的.on打印结果的
writeStream.end()
writeStream.on('finish',()=>{
    console.log('写入完成')
})