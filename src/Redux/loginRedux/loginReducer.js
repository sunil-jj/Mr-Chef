import { POST_USER_SUCCESS, POST_USER_FALIURE, FETCH_USER_FALIURE, FETCH_USER_SUCCESS } from "../loginRedux/loginActionTypes"


const initstate={
userDetails:{},
isError:false
}

export const reducerReducer=(store=initstate,action)=>{
switch(action.type){
    case POST_USER_SUCCESS:{
     return{
        ...store, userDetails:action.payload, isError:false
     }
    }

    case POST_USER_FALIURE:{
        return{
           ...store, isError:true
        }
       }

       case FETCH_USER_SUCCESS:{
        return{
            ...store, userDetails:action.payload, isError:false
        }
       }

       case FETCH_USER_FALIURE:{
        return{
           ...store, isError:true
        }
       }

    default:
        return store
}

}