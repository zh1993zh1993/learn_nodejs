/*
1、https://www.npmjs.com/package/silly-datetime
2、npm i silly-datetime --save
3、引入：var sd = require('silly-datetime');
4、看文档使用
5、如果删掉node_modules，后台就不能运行，但是可以通过npm i，可以将之前的包给安装上

*/

var sd = require('silly-datetime');

 var d= sd.format(new Date(), 'YYYY-MM-DD HH:mm');
 console.log(d)