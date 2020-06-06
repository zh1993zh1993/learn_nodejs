
var http = require('http');
const url=require('url')
http.createServer(function (request, response) {

  response.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});

  console.log(request.url)
  if(request.url!='/favicon.ico'){

   // url.parse(request.url,true).query URL字符串转换成对象并返回。
  
      var userinfo=url.parse(request.url,true).query
      console.log(`姓名:${userinfo.name}--年龄:${userinfo.age}`)
  }
  response.end('我终于成功了');
}).listen(3000);//端口


