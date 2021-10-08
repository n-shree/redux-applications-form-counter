import { createStore } from "redux";
import combineAction from "../Reducer/index";

const store= createStore(combineAction, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;