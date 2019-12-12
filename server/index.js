import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import express from 'express'
import App from '../src/app'
import {Provider} from 'react-redux';
import store from '../src/store/store'

const app=express()
app.use(express.static('public'))

app.get('*',(req,res)=>{


    // 渲染react页面
    const html=renderToString(
        // 服务端渲染需要用StaticRouter
        <Provider store={store}>
        <StaticRouter location={req.url}>
            {App}
        </StaticRouter>

        </Provider>
    )

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