import { createSlice } from '@reduxjs/toolkit';
import { searchCocktails } from './searchAsyncThunk';

const initialState = {
  results: [],
  loading: false,
  error: null,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchCocktails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchCocktails.fulfilled, (state, action) => {
        state.loading = false;
        state.results = action.payload;
      })
      .addCase(searchCocktails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default searchSlice.reducer;
