import { combineReducers } from "redux";
import filedListReducer from "./fieldList/reducer";
import contactListReducer from "./contactsList/reducer";

export default combineReducers({
    contactsList: contactListReducer,
    fieldList: filedListReducer,
})


