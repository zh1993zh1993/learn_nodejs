let path = require("path");
// 获取当前执行文件的目录
console.log(__dirname);
//获取当前的指向文件
console.log(__filename)
//获取文件扩展名
console.log(path.extname(__filename))
// 解析路径，可以将路径信息直接解析出来，解析出根路径，目录，扩展名，文件名称，
console.log(path.parse(__filename))