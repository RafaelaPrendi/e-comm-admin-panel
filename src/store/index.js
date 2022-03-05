import { applyMiddleware, createStore } from "redux";
import  thunk  from "redux-thunk";
import rootReducer from "../reducers";
//thunk for async actions
const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
