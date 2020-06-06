/*
普通方法
function test(){
    return '您好，nodejs'
}
console.log(test())*/

/*
async将普通方法变成了异步方法
 async function test(){
    // 返回了一个： Promise { '您好，nodejs' }
    return '您好，nodejs'
}
console.log(await  test())//报错 ：await必须用在async(异步)方法里
*/
/*
1、声明了异步方法
async function test(){
    return '您好，nodejs'
}
2、等待异步方法完成，用await调取异步方法里的数据
async function main(){
    var data=await test()//表示回去异步方法里发数据
    console.log(data)
}
main()

*/


async function test(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        var name='张三 222'
        resolve(name)
    
    },1000)
  })
}

async function main(){
    var data=await test()//表示回去异步方法里发数据
    console.log(data)
}
main()
