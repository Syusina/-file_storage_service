import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

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

export const fetchFilesUpload = createAsyncThunk(
  'files/fetchFilesUpload',
  async ({ token, files }: { token: string, files: File[] }) => {
    const response = await fetch('https://js-test.kitactive.ru/api/media/upload', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ files })
    });

    const data = await response.json();
    return data;
  }
);

const filesUploadSlice = createSlice({
  name: 'filesUpload',
  initialState: {
    files: [],
    loading: 'idle',
  } as FilesState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFilesUpload.fulfilled, (state, action) => {
      state.files = action.payload;
      state.loading = 'fulfilled';
    });
  },
});


export const filesUploadReducer = filesUploadSlice.reducer;
