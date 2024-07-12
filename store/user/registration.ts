import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const registerUser = createAsyncThunk(
  'user/register',
  async ({ email, password, name }: { email: string; password: string; name: string }) => {
    const response = await fetch('https://js-test.kitactive.ru/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, name }),
    });

    const data = await response.json();
    return data;
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
