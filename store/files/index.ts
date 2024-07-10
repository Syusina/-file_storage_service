import { combineReducers } from "@reduxjs/toolkit";
import { filesArrReducer } from "./files";
import { filesUploadReducer } from "./upload";

export const filesReducer = combineReducers({
  files: filesArrReducer,
  upload: filesUploadReducer,
});
