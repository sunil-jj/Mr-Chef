import { POST_USER_SUCCESS, POST_USER_FALIURE, FETCH_USER_FALIURE, FETCH_USER_SUCCESS } from "../loginRedux/loginActionTypes";

export const postUserSuccess = (data)=> {
    return{
        type: FETCH_USER_SUCCESS,
        payload:data
    }
}

export const postUserFaliure = ()=> {
    return{
        type: POST_USER_FALIURE
    }
}

export const fetchUserSuccess = (data)=> {
    return{
        type: FETCH_USER_SUCCESS,
        payload:data
    }
}

export const fetchUserFaliure = ()=> {
    return{
        type: FETCH_USER_FALIURE
    }
}