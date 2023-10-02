import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getIngredient } from '@/redux/ingredient/ingredientAsyncThunk';

import Image from 'next/image';
import Link from 'next/link';

import './Ingredient.scss';

const Ingredient = ({ ingredient, themeMode }) => {
  const dispatch = useDispatch();

  const ingredientCocktails = useSelector(
    (state) => state.ingredient.ingredientCocktails.drinks
  );

  useEffect(() => {
    dispatch(getIngredient(ingredient));
  }, [dispatch, ingredient]);

  return (
    <div className={`ingredient_page ${themeMode}`}>
      <h1>Cocktails with {ingredient}</h1>
      <div className='ingredient_cocktails'>
        {ingredientCocktails?.map((cocktail) => {
          return (
            <Link
              href={`/${cocktail?.idDrink}`}
              key={cocktail.idDrink}
              className='one_drink'
            >
              <Image
                src={cocktail.strDrinkThumb}
                alt='ingredient drink'
                width={250}
                height={250}
                className='one_drink_img'
              />
              <span>{cocktail.strDrink}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Ingredient;
