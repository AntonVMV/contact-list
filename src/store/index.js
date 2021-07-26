import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./rootReducer";
import persistState from "redux-localstorage";

const enchancer = compose(applyMiddleware(), persistState());

export default createStore(rootReducer, enchancer);