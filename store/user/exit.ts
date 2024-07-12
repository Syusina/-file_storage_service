import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'; // Import axios

export const exitUser = createAsyncThunk(
  'user/exit',
  async ({ token }: { token: string }) => {
    const response = await axios.post('https://js-test.kitactive.ru/api/logout', null, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });

    return response.data;
  }
);

const userExitSlice = createSlice({
  name: 'userExit',
  initialState: {
    email: '',
    password: '',
    name: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(exitUser.fulfilled, (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.name = action.payload.name;
    });
  },
});

export const userExitReducer = userExitSlice.reducer;
