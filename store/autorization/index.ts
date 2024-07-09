import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const authorizationUser = createAsyncThunk(
  'user/authorization',
  async ({ email, password }: { email: string; password: string }) => {
    const response = await fetch('https://js-test.kitactive.ru/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    return data;
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

export const selectToken = (state: RootState) => state.userAuthorization.token;

export const userAuthorisationReducer = userAuthorisationSlice.reducer;

