let os = require("os");
console.log(os)
// 查看CPU信息
console.log(os.cpus())
 
// 查看整个内存的大小信息 8430870528
console.log(os.totalmem())

// 查看系统架构 x64
console.log(os.arch())

// 查看剩余内存量 3930705920
console.log(os.freemem())

// 查看系统平台 win32
console.log(os.platform())