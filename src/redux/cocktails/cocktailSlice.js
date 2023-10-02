import { createSlice } from '@reduxjs/toolkit';
import { getCocktails } from './cocktailsAsyncThunk';

const initialState = {
  cocktails: [],
  currentPage: 1,
  itemsPerPage: 12,
  loading: false,
  error: null,
};

const cocktailSlice = createSlice({
  name: 'cocktails',
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCocktails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCocktails.fulfilled, (state, action) => {
        state.loading = false;
        state.cocktails = state.cocktails.concat(action.payload.drinks);
        state.currentPage += 1;
        state.itemsPerPage = 12;
      })
      .addCase(getCocktails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {
  setCocktails,
  setLoading,
  setError,
  setCurrentPage,
  setItemsPerPage,
} = cocktailSlice.actions;

export default cocktailSlice.reducer;
