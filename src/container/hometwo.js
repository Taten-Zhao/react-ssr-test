import React,{useState,useEffect} from "react";
import {connect} from 'react-redux'
import {getHomeTwoList} from '../store/homeTwo'

function HomeTwo(props) {
    console.log(props.homeTwo,'props2');
    
    const ulStyle={
        listStyle:'none'
    }
    return <div>
             <h1>大家好，我是home2页面 </h1> 
              <ul style={ulStyle}>
                {props.homeTwo.listTWO.map(item=>{
                return <li key={item.class}>{item.name}</li>
                })}
            </ul>
    </div>
}

HomeTwo.loadData=(store)=>{
    return store.dispatch(getHomeTwoList())
}

export default connect(
    state=>{
        console.log(state.homeTwo,"state1");
        
        return {homeTwo:state.homeTwo}
        
    // homeTwo:state.homeTwo
},
// {getHomeTwoList}
)(HomeTwo)