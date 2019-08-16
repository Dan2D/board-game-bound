import {createStore, applyMiddleware, compose} from "redux";
import {initialState} from "./initialState";
import {devToolsEnhancer} from 'redux-devtools-extension/developmentOnly';
import thunk from "redux-thunk";
import rootReducer from "./Reducers";

let middleware = [thunk];

const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(...middleware), devToolsEnhancer()))

export default store;