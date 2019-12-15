// 模拟后台创建简单的接口，模拟数据
const express = require('express')
const app = new express()

app.get('/api/home/list', (req, res) => {
    // 支持跨域写法
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Accedss-Control-Allow-Methods', 'GET,POST,PUT,DELETE')
    res.header('Content-type', 'application/json;charset=utf-8')
    res.json({
        code: 200,
        list: [
            {class:'chuancai1',name:"辣子鸡丁"},
            {class:'chuancai2',name:"鱼香肉丝"},
            {class:'dongbeicai',name:"乱炖"},
            {class:'xiangcai',name:"酸辣鱼"}
        ]
    })

})

app.get('/api/homeTwo/list', (req, res) => {
    // 支持跨域写法
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Accedss-Control-Allow-Methods', 'GET,POST,PUT,DELETE')
    res.header('Content-type', 'application/json;charset=utf-8')
    res.json({
        code: 200,
        listTWO: [
            {class:'chuancai1',name:"星期一"},
            {class:'chuancai2',name:"星期二"},
            {class:'dongbeicai',name:"星期三"},
            {class:'xiangcai',name:"星期四"}
        ]
    })

})

app.listen(9099,()=>{
    console.log('后台启动成功');
    
})