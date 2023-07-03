import { combineReducers } from "redux";
import authReducer from "./authentication/authReducers";

const rootReducer = combineReducers({
  authReducer,
});

export default rootReducer;
