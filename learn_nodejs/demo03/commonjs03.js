

var request=require('./module/request')

//module导出的方法： console.log(request)//{ get: [Function: get], post: [Function: post] }

//console.log(request)// exports导出的方法{ get: [Function], post: [Function] }

// 调用方法
request.get()
request.post()