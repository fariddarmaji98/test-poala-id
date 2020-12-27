import { combineReducers } from "redux";
import apiReducer from "./apiReducer";
import userReducer from "./userReducer";

export default combineReducers({
  data: apiReducer,
});
