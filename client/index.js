import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter,Route} from "react-router-dom";
import {Provider} from 'react-redux';
import {getClientStore} from '../src/store/store'

import routes from '../src/app'
import Header from '../src/component/Header'

//注水，渲染到页面  
//注水，渲染到页面  render遵从客户端渲染虽然保证了客户端代码的一致性，但是其需要对整个应用做dom diff和dom patch，其花销仍然不小。hydrate的策略与render的策略不一样，其并不会对整个dom树做dom patch，其只会对text Content内容做patch，对于属性并不会做patch
const Page=(<Provider store={getClientStore()}>
    <BrowserRouter>  
    <Header></Header>
    {routes.map(route=><Route {...route}></Route>)}</BrowserRouter>
    </Provider>)
ReactDom.hydrate(Page,document.getElementById('root'))