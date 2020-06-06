/*第一种方法
var obj={
    get(){
        console.log('从服务器获取数据')
    },
    post(){
        console.log('提交数据')
    }
}

// 如果是通过对象来封装，建议用下面的方法导出
module.exports=obj*/


// 如果方法独立，可以用exports一个个导出
exports.get=()=>{
    console.log('从服务器获取数据')
}
exports.post=()=>{
    console.log('提交数据')
}