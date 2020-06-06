        var http = require('http');
        // http://www.itying.com/api/plist
        function formatApi(api){
            return "http://www.itying.com/"+api
        }

        http.createServer(function (request, response) {

        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
        response.write('你好nodejs<br >')
        var api=formatApi('/api/plist')

        response.end(api);

        }).listen(8081);

