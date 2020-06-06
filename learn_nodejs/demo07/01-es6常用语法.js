/*
1.let const 模板字符串
2.箭头函数
3.对象、属性的简写
4.模板字符串
5.Promise

*/
/* 

// let是一个块级作用域,下面的a是不会被打印出来的
if(true){
    let a=123
}
console.log(a)
// const是常量，所以下面的变量是会报错的
const PI=3.154125
PI=3
console.log(PI)
*/
/*
ES6里的模板字符串
var name='张三'
var age=20
console.log(`${name}的年龄是${age}`)
*/ 
/*
 方法的简写
var name='张三'
var app={
    name,
    run(){
        console.log(`${this.name}在跑步`)
    }
}
app.run()
*/
/*
 箭头函数 this指向上下文

setTimeout(()=>{
console.log('执行')
},1000)
*/

  /*
  function getDate(callback){
    //   ajax ES6出来之前应用的方法
      setTimeout(()=>{
          var name='张三'
          callback(name)
      },1000)
  }
//   外部获取异步方法里面的数据
getDate((aaa)=>{
    console.log(aaa)
  })

  */
 /*
 5.Promise 处理异步   resolve 成功的回调函数 reject失败的回调函数

  var p=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        var name='张三'
        resolve(name)
    },1000)
  })
  p.then((data)=>{
      console.log(data)
  })
 */ 
/*
Promise的链式编程
成功的时候调用resolve,然后回调then
失败的时候调用reject，然后回调catch
*/ 
  new Promise((resolve,reject)=>{
    setTimeout(()=>{
        var name='张三'
        var err='错误'
        resolve(name)
        reject(err)
       
    },1000)
  }).then((data)=>{
      console.log(data)
  }).catch(err=>{})

