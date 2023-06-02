import {
    GET_DATA_REQUEST,
    GET_DATA_SUCCESS,
    GET_DATA_FAILURE,
    ADD_CART_REQUEST,
    ADD_CART_SUCCESS,
    ADD_CART_FAILURE
} from "./actionTypes";

export const getDataRequest = () => {
    return { type : GET_DATA_REQUEST }
}

export const getDataSuccess = (payload) => {
    return { type : GET_DATA_SUCCESS, payload }
}

export const getDataFailure = () => {
    return { type : GET_DATA_FAILURE }
}

export const addCartRequest = () => {
    return { type : ADD_CART_REQUEST }
}

export const addCartSuccess = (payload) => {
    return { type : ADD_CART_SUCCESS, payload }
}

export const addCartFailure = () => {
    return { type : ADD_CART_FAILURE }
}