import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCocktailDetail = createAsyncThunk(
  'cocktails/getCocktailDetail',
  async (cocktailId, { fulfillWithValue, rejectWithValue }) => {
    // const URL =
    //   process.env.MY_API + `/api/json/v1/1/lookup.php?i=${cocktailId}`;
    const URL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`;

    return axios
      .get(URL)
      .then((res) => fulfillWithValue(res.data.drinks[0]))
      .catch((err) => rejectWithValue(err));
  }
);
