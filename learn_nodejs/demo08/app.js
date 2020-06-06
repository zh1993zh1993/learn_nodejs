const fs=require('fs')
// 1、先创建一个读取流
var readStream=fs.createReadStream('./aaa.jpg')
// 2、再创建一个写入流，需要复制到的地址下，再命名
var writeStream=fs.createWriteStream('./data/aaa.jpg')
// 3、将读取的文件复制到文件中
readStream.pipe(writeStream)