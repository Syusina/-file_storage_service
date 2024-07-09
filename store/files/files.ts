import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface File {
  id: string;
  name: string;
  fileName: string;
  mimeType: string;
  url: string;
  createdAt: string;
}

interface FilesState {
  files: File[];
  loading: 'idle' | 'pending' | 'fulfilled' | 'rejected';
}

export const fetchFiles = createAsyncThunk(
  'files/fetchFiles',
  async ({ token }: { token: string }) => {
    const response = await fetch('https://js-test.kitactive.ru/api/media', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${token}`
      },
    });

    const data = await response.json();
    return data;
  }
);

const filesSlice = createSlice({
  name: 'files',
  initialState: {
    files: [],
    loading: 'idle',
  } as FilesState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFiles.fulfilled, (state, action) => {
      state.files = action.payload;
      state.loading = 'fulfilled';
    });
  },
});

export const selectArrFiles = (state: RootState) => state.fetchFiles.files;

export const filesArrReducer = filesSlice.reducer;