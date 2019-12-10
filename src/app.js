import React,{useState} from "react";

function App(params) {
    const [count,setCount]=useState(1)
    const btnStyle={
        color:'blue',
        cursor:'pointer',
        marginLeft:'50px'
    }
    return <div>
            <h1>Hello {params.title}!!</h1>
            <h2>我现在是number：{count}</h2>
            <button onClick={()=>setCount(count+5)} style={btnStyle}>Add</button>
    </div>
}

export default <App title="React 初次尝试"></App>