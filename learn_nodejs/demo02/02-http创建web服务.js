// 表示引入HTTP模块
var http = require('http');
/*
request:回应客户端传过来的信息
response:给浏览器响应信息
*/
http.createServer(function (request, response) {
    // 设置响应头
    // 状态码是 200，文件类型是 html 字符集是 utf-8，不加单引号就不会乱码
  response.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});

  response.write('你好 nodejs')

  response.write('<h2>你好 nodejs</h2>')
//   表示给页面上输入一句话并且结束响应
  response.end('Hello World');
}).listen(3000);//端口

console.log('Server running at http://127.0.0.1:8081/');