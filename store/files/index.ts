import { combineReducers } from "@reduxjs/toolkit";
import { filesArrReducer } from "./files";

export const filesReducer = combineReducers({
  files: filesArrReducer,
});
