import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const exitUser = createAsyncThunk(
  'user/exit',
  async ({ token }: { token: string }) => {
    const response = await fetch('https://js-test.kitactive.ru/api/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    });

    const data = await response.json();
    return data;
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
