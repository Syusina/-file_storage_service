import { configureStore } from '@reduxjs/toolkit';
import { userRegistrationReducer } from './registration/index';
import { userAuthorisationReducer } from './autorization/index';
import { userExitReducer } from './exit/index';
import { filesReducer } from './files/index';


const store = configureStore({
  reducer: {
    userRegistration:  userRegistrationReducer,
    userAuthorization: userAuthorisationReducer,
    userExit: userExitReducer,
    files: filesReducer,
  },
});

export default store;