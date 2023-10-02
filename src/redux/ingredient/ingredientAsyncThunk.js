import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getIngredient = createAsyncThunk(
  'ingredient/getCocktailsByIngredient',
  async (ingredient, { fulfillWithValue, rejectWithValue }) => {
    return axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`
      )
      .then((res) => fulfillWithValue(res.data))
      .catch((err) => rejectWithValue(err));
  }
);
