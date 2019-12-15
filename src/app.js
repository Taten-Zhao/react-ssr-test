import React,{useState} from "react";
import {Route} from 'react-router-dom'
import Home from "./container/home";
import About from "./container/about";
import HomeTwo from "./container/hometwo";


// export default (
//     <div>
//         <Route path="/" exact component={Home}></Route>
//         <Route path="/about" exact component={About}></Route>
//     </div>
// )



export default [
    {
        path:'/',
        component:Home,
        exact:true,
        key:"home"
    },{
        path:'/about',
        component:About,
        exact:true,
        key:"about"
    },{
        path:'/homeTwo',
        component:HomeTwo,
        exact:true,
        key:"homeTwo"
    }
]
    