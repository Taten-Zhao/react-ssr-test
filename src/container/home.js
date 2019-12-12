import React,{useState,useEffect} from "react";
import {connect} from 'react-redux'
import {getHomeList} from '../store/index'

function Home(params) {
    const [count,setCount]=useState(1)
    const btnStyle={
        color:'blue',
        cursor:'pointer',
        marginLeft:'50px'
    }
    const ulStyle={
        listStyle:'none'
    }
    useEffect(()=>{
        params.getHomeList()
    },[])
    return <div>
                <h1>Hello {params.title}!!</h1>
                <h2>我现在是number：{count}</h2>
            <button onClick={()=>setCount(count+5)} style={btnStyle}>Add</button>
            <hr/>
            <ul style={ulStyle}>
                {params.list.map(item=>{
                return <li key={item.class}>{item.name}</li>
                })}
            </ul>
    </div>
}

export default connect(
    state=>({
    list:state.index.list
}),{getHomeList})(Home)