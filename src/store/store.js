// 存储的入口
//TODO 需要补习redux
import {createStore,applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import indexReducer from './index'
import HomeTwoListReducer from './homeTwo'

const reducer=combineReducers({
    index:indexReducer,
    homeTwo:HomeTwoListReducer
})

//创建store
// const store=

// export default store
export const getServeStore =()=>{

    // 服务端用，通过server的dispatch派发来获取数据和充实
    return createStore(reducer,applyMiddleware(thunk))
}

export const getClientStore=()=>{
    // 定义Windows的属性来获取数据
    // 浏览器端
    const defaultState=window.__conmtext?window.__conmtext:{}
    return createStore(reducer,defaultState,applyMiddleware(thunk))
}