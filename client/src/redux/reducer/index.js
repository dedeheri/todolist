import { combineReducers } from "redux";

import authorization from "./authorization";
import labels from "./labels";
import style from "./style";
import task from "./task";

const reducers = combineReducers({
  authorization,
  labels,
  style,
  task,
});

export default reducers;
