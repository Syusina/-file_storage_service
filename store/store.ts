import { configureStore } from '@reduxjs/toolkit';
import { filesReducer } from './files/index';
import { userReducer } from './user';

const store = configureStore({
  reducer: {
    user: userReducer,
    files: filesReducer,
  },
});

export default store;