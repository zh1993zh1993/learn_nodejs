// let axios = require("axios");
let request = require("request")

let httpUrl1="https://www.1905.com/vod/list/n_1_t_1/o3p1.html"


//  2、获取分类里的电影链接 3、根据电影链接获取电影的详细内容

function req(url){
        return new Promise((resolve,reject)=>{
            request.get(url,(err,response,body)=>{
                if(err){
                    reject(err)
                }else{
                    resolve({response,body})
                }
            })
        })
}
//1、 获取起始页面的所有分类的地址
async  function getClassUrl(){
    let {response,body} = await req(httpUrl1)
    // console.log(body)
    let reg = /<span class="search-index-L">栏目(.*?)<div class="grid-12x">/igs
    // 解析HTML内容
    /* exec()是RegExp对象的主要方法。exec()接受一个参数，即要应用模式的字符串，
    然后返回包含第一个匹配项信息的数组，或者在没有匹配项的情况下返回null。*/
    let result = reg.exec(body)
    console.log(result[1])
}
getClassUrl()