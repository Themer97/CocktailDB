import { configureStore } from '@reduxjs/toolkit';
import cocktailSlice from './cocktails/cocktailSlice';
import thunkMiddleware from 'redux-thunk';
import detailsSlice from './details/detailsSlice';
import searchSlice from './search/searchSlice';
import ingredientSlice from './ingredient/ingredientSlice';

const store = configureStore({
  reducer: {
    cocktails: cocktailSlice,
    cocktailDetail: detailsSlice,
    search: searchSlice,
    ingredient: ingredientSlice,
  },
  middleware: [thunkMiddleware],
});

export default store;
