import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store';
import axios from 'axios'; // Import axios

export const authorizationUser = createAsyncThunk(
  'user/authorization',
  async ({ email, password }: { email: string; password: string }) => {
    const response = await axios.post('https://js-test.kitactive.ru/api/login', { email, password });

    return response.data;
  }
);

const userAuthorisationSlice = createSlice({
  name: 'userAuth',
  initialState: {
    email: '',
    password: '',
    token: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(authorizationUser.fulfilled, (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.token = action.payload.token;
    });
  },
});

export const selectToken = (state: RootState) => state.user.auth.token;

export const userAuthorisationReducer = userAuthorisationSlice.reducer;
