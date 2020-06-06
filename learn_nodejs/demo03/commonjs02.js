        var http = require('http');
        // 用require引入这个包
        const tools=require('./module/tools.js')
        console.log(tools)
        http.createServer((request, response)=> {

        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
        response.write('你好nodejs<br >')
       
        var api=tools.formatApi('api/focus')
        response.write(api)
        response.end();

        }).listen(8081);

