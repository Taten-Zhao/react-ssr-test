import React from 'react'
import { renderToString } from 'react-dom/server'
import express from 'express'
import App from '../src/app'

const app=express()
app.use(express.static('public'))

app.get('/',(req,res)=>{


    // 渲染react页面
    const html=renderToString(App);

    res.send(
        `
        <html>
            <head>
                <meta charset="utf-8"/>
                <title>React SSR</title>
            </head>
            <body>
                <div id="root">${html}</div>
            </body>
            <script src="/bundle_client.js"></script>
        </html>
        `
    )
})

app.listen(9098,()=>{
    console.log("监听成功了！！");
    
})