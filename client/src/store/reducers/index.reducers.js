import { combineReducers } from "redux";
import {
  getDataReducer,
  addDataReducer,
  deleteDataReducer,
} from "./getDataReducer";
const rootReducer = combineReducers({
  getDataReducer,
  addDataReducer,
  deleteDataReducer,
});
export default rootReducer;
