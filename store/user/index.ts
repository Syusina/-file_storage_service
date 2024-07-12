import { combineReducers } from "@reduxjs/toolkit";
import { userAuthorisationReducer } from "./authorization";
import { userExitReducer } from "./exit";
import { userRegistrationReducer } from "./registration";

export const userReducer = combineReducers({
  auth: userAuthorisationReducer,
  exit: userExitReducer,
  registration: userRegistrationReducer,
});
