import React from 'react'
import {Link} from 'react-router-dom'

const Style={
    width:'10px',
    height:"10px",
    display:"inline-block"
}

export default ()=>{

    return <div>
        <Link to="/">Home</Link>
        <span style={Style}></span>
        <Link to="/about">About</Link>
        <span style={Style}></span>
        <Link to="/homeTwo">HomeTwo</Link>
    </div>
}