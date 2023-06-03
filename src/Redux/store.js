import { legacy_createStore, combineReducers } from "redux";
import { reducer } from "./reducer";
import { reducerReducer } from "./loginRedux/loginReducer";

const rootReducer = combineReducers({ reducer, reducerReducer});

export const store = legacy_createStore(rootReducer);

store.subscribe(()=> {
    console.log(store.getState())
})

