import {
    GET_DATA_REQUEST,
    GET_DATA_SUCCESS,
    GET_DATA_FAILURE,
    ADD_CART_REQUEST,
    ADD_CART_SUCCESS,
    ADD_CART_FAILURE
} from "./actionTypes";

const initstate={
    isLoading : false,
    isError : false,
    data : [],
    cart : []
}

export const reducer = (store = initstate , action) => {
    const { type, payload } = action;

    switch(type) {
        case GET_DATA_REQUEST : {
            return {...store, isLoading : true}
        }
        case GET_DATA_SUCCESS : {
            return {...store, isLoading : false, data : payload}
        }
        case GET_DATA_FAILURE : {
            return {...store, isLoading : false, isError : true}
        }

        /* case GET_STREETFOOD_REQUEST : {
            return {...store, isLoading : true}
        }
        case GET_STREETFOOD_SUCCESS : {
            return {...store, isLoading : false, data : payload}
        }
        case GET_STREETFOOD_FAILURE : {
            return {...store, isLoading : false, isError : true}
        } */

        case ADD_CART_REQUEST : {
            return {...store, isLoading : true}
        }
        case ADD_CART_SUCCESS : {
            return {...store, isLoading : false, cart : [...store.cart, payload]}
        }
        case ADD_CART_FAILURE : {
            return {...store, isLoading : false, isError : true}
        }

        default : {
            return store
        }
    }

const initstate = { 
}

export const reducer = (store = initstate, action) => {

}

