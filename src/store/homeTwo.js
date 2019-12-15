//首页的接口逻辑


//TODO 需要补习redux
import axios from 'axios'
// actionType
const GET_LIST='INDEX/GET_LISTTWO'

//actionCreator
const changListTwo=listTWO=>({
    type:GET_LIST,
    listTWO
})

export const getHomeTwoList=server=>{
    console.log("wolailelllelle")
    return (dispatch,getState,axiosInstance)=>{
        return axios.get('http://localhost:9099/api/homeTwo/list')
        .then(res=>{
            const {listTWO}=res.data
            
            console.log(listTWO,"listTWO11");
            
            dispatch(changListTwo(listTWO))
        })
    }
}

const defautState={
    listTWO:{}
}

export default (state=defautState,action)=>{
    switch (action.type) {
        case GET_LIST:
            console.log(action.listTWO,"action")
            const newState={
                ...state,
                listTWO:action.listTWO
            }
            return newState
            break;
    
        default:
            return state
            break;
    }
}