let fs = require('fs');
//node 事件，自己定义事件触发
fs.readFile("hello.txt",{flags:"r",encoding:"utf-8"},(err,data)=>{
            if(err){
                console.log(err)
            }else{
                console.log(data)
                zhEvent.emit('fileSuccess',data)
                /*
                1、 数据库查看所有的用户详细信息
                2、统计年龄比列
                3、查看所有用户学下的详细信息
                */
            }
})


let zhEvent = {
    event:{
        // fileSuccess:[fn,fn,fn]
    },
    on(eventName,eventFn){
        if(this.event[eventName]){
            this.event[eventName].push(eventFn)
        }else{
            this.event[eventName] = [];
            this.event[eventName].push(eventFn)
        }
    },
    emit(eventName,eventMsg){
            if(this.event[eventName]){
                this.event[eventName].forEach(itemFn =>{
                    itemFn(eventMsg)
                })
            }
    }
}

zhEvent.on('fileSuccess',(eventMsg)=>{
    console.log("1、数据库查看所有的用户详细信息")
})
zhEvent.on('fileSuccess',(eventMsg)=>{
    console.log("2、统计年龄比列")
})
zhEvent.on('fileSuccess',(eventMsg)=>{
    console.log("3、查看所有用户学下的详细信息")
})