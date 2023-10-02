import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCocktails = createAsyncThunk(
  'cocktails/getCocktails',
  async (letter, { fulfillWithValue, rejectWithValue }) => {
    return axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`)
      .then((res) => fulfillWithValue(res.data))
      .catch((err) => rejectWithValue(err));
  }
);

export const darkMode = createAsyncThunk(
  'cocktails/getCocktails',
  async (letter, { fulfillWithValue, rejectWithValue }) => {
    return axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`)
      .then((res) => fulfillWithValue(res.data))
      .catch((err) => rejectWithValue(err));
  }
);
