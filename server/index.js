import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter,matchPath,Route } from 'react-router-dom'
import express from 'express'
import routes from '../src/app'
import {Provider} from 'react-redux';
import {getServeStore} from '../src/store/store'

import Header from '../src/component/Header'

const store=getServeStore()
const app=express()
app.use(express.static('public'))

app.get('*',(req,res)=>{
    // 根据路由获取页面需要渲染的组件，同时拿到loadData方法，获取数据

    
    const promises=[];

    routes.some(route=>{
        const match=matchPath(req.path,route)

        if(match){
            const {loadData}=route.component
            if(loadData){
                // 将需要加载的组件的初始化请求方法push
                promises.push(loadData(store))
            }
        }
    })

    // 渲染所有网络的请求，获取数据
    Promise.all(promises).then(()=>{
          // 渲染react页面
        const html=renderToString(
            // 服务端渲染需要用StaticRouter
            <Provider store={store}>
            <StaticRouter location={req.url}>
                <Header></Header>
                 {routes.map(route=><Route {...route}></Route>)}
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
                <script>
                     window.__context=${JSON.stringify(store.getState())}
                </script>
                <script src="/bundle_client.js"></script>
            </html>
            `
        )
    })

  
})

app.listen(9098,()=>{
    console.log("监听成功了！！");
    
})