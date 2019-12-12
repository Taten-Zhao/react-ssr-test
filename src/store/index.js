//首页的接口逻辑


//TODO 需要补习redux
import axios from 'axios'
// actionType
const GET_LIST='INDEX/GET_LIST'

//actionCreator
const changList=list=>({
    type:GET_LIST,
    list
})

export const getHomeList=server=>{
    return (dispatch,getState,axiosInstance)=>{
        return axios.get('http://localhost:9099/api/home/list')
        .then(res=>{
            const{list}=res.data
            dispatch(changList(list))
        })
    }
}

const defautState={
    list:[]
}

export default (state=defautState,action)=>{
    switch (action.type) {
        case GET_LIST:
            const newState={
                ...state,
                list:action.list
            }
            return newState
            break;
    
        default:
            return state
            break;
    }
}