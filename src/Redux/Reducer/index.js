import {combineReducers} from "redux";
import counterAction from "./Reducer";
import cardAction from "./CardReducer"

const combineAction = combineReducers({counterAction,cardAction})
export default combineAction;