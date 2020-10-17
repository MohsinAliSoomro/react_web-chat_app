import { authContant } from "../actions/authConstant"

const initialStete={
    firtName:'',
    lastName:'',
    email:'',
    authenticating:false,
    authenticated:false,
    error:null
}
export default (state=initialStete,action)=>{
    switch(action.type){
        case `${authContant.USER_LOGIN}_REQUEST`:
        return state={
            ...state,
            authenticating:true
        }    
        
        case `${authContant.USER_LOGIN}_SUCCESS`:
            return state={
                ...state,
                ...action.payload.user,
                authenticated:true,
                authenticating:false
            }
        
        case `${authContant.USER_LOGIN}_FAILURE`:
           return  state={
                authenticated:false,
                authenticating:false,
                error:action.payload.error
            }
           
            default:{
                return state;
            }
    }
}