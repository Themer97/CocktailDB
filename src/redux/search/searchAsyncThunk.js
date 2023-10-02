import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const searchCocktails = createAsyncThunk(
  'search/searchCocktails',
  async (searchTerm, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
      );
      return response.data.drinks || [];
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
