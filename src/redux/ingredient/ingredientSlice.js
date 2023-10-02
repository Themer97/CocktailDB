import { createSlice } from '@reduxjs/toolkit';
import { getIngredient } from './ingredientAsyncThunk';

const initialState = {
  ingredientCocktails: [],
  loading: false,
  error: null,
};

const ingredientSlice = createSlice({
  name: 'ingredient',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getIngredient.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getIngredient.fulfilled, (state, action) => {
        state.loading = false;
        state.ingredientCocktails = action.payload;
      })
      .addCase(getIngredient.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default ingredientSlice.reducer;
