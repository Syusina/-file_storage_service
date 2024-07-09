import { configureStore } from '@reduxjs/toolkit';
import { userRegistrationReducer } from './registration/index';
import { userAuthorisationReducer } from './autorization/index';
import { userExitReducer } from './exit/index';

const store = configureStore({
  reducer: {
    userRegistration:  userRegistrationReducer,
    userAuthorization: userAuthorisationReducer,
    userExit: userExitReducer,
  },
});

export default store;