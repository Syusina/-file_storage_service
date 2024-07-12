import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const registerUser = createAsyncThunk(
  'user/register',
  async ({ email, password, name }: { email: string; password: string; name: string }) => {
    const response = await axios.post('https://js-test.kitactive.ru/api/register', {
      email,
      password,
      name,
    });
    return response.data;
  }
);

const userRegistrationSlice = createSlice({
  name: 'userRegistration',
  initialState: {
    email: '',
    password: '',
    name: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.name = action.payload.name;
    });
  },
});

export const userRegistrationReducer = userRegistrationSlice.reducer;
