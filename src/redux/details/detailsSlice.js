import { createSlice } from '@reduxjs/toolkit';
import { getCocktailDetail } from './detailsAsyncThunk';

const initialState = {
  cocktailDetail: [],
  loading: false,
  error: null,
};

const cocktailDetailsSlice = createSlice({
  name: 'cocktailDetail',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getCocktailDetail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCocktailDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.cocktailDetail = action.payload;
      })
      .addCase(getCocktailDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default cocktailDetailsSlice.reducer;
