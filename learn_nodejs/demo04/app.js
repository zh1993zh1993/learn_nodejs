     //指定安装版本： npm i node-media-server@2.1.0 --save
    //  npm i/cnpm i 表示 如果删掉node_modules可以通过此命令安装dependencies对应的所有的包的信息
            
            var sd = require('silly-datetime');
            var md5=require('md5')
            var d= sd.format(new Date(), 'YYYY-MM-DD HH:mm');
            console.log(d)
            console.log(md5('123456'))