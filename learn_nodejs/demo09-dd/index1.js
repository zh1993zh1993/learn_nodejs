let a = 456;
let b = 5;
let c = 6;
// exports就是默认导出的对象
exports.a = a;
module.exports.c = c;
//系统默认设置了：exports = modules.exports
// exports = {user:"小明"}
module.exports = {user:"小明"}
// 注意使用exports时，只能单个设置属性exports.a = a;
// 使用module.exports可以单个设置属性，也可以整个赋值
