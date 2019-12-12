import React,{useState} from "react";
import {Route} from 'react-router-dom'
import Home from "./container/home";
import About from "./container/about";


export default (
    <div>
        <Route path="/" exact component={Home}></Route>
        <Route path="/about" exact component={About}></Route>
    </div>
)