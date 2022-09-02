import { combineReducers } from "redux";
import  weatherDetail  from './weatherReducer';

const rootReducer = combineReducers({
    weatherDetail
})

export default rootReducer;