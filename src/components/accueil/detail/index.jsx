import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import { getCocktailDetail } from '@/redux/details/detailsAsyncThunk';

import './Detail.scss';

const Details = ({ id, themeMode }) => {
  const dispatch = useDispatch();

  const { cocktailDetail } = useSelector((state) => state.cocktailDetail);

  useEffect(() => {
    dispatch(getCocktailDetail(id));
  }, [dispatch, id]);

  if (!cocktailDetail) {
    return null;
  }

  return (
    <div
      className={`details_container ${themeMode} ${
        themeMode === 'light' ? 'light_theme' : 'dark_theme'
      }`}
    >
      <div className='card-container'>
        <div className='card'>
          <div className='img-content'>
            <Image
              className='cocktail_img'
              src={cocktailDetail.strDrinkThumb}
              width={780}
              height={780}
              alt='cocktail-image'
            />
          </div>
          <div className='content'>
            <p className='heading'>{cocktailDetail.strDrink}</p>
            <p>{cocktailDetail.strInstructions}</p>
          </div>
        </div>
      </div>
      <div>
        <div className='ingredients'>
          <h2>Ingredients</h2>
          <div className='ingredient'>
            {Array.from({ length: 15 }, (_, index) => {
              const ingredientKey = `strIngredient${index + 1}`;
              const measurementKey = `strMeasure${index + 1}`;

              const ingredient = cocktailDetail[ingredientKey];
              const measurement = cocktailDetail[measurementKey];

              if (ingredient) {
                return (
                  <Link
                    href={`/ingredient/${encodeURIComponent(ingredient)}`}
                    className='ingredient_item'
                    key={ingredientKey}
                  >
                    <Image
                      src={`https://www.thecocktaildb.com/images/ingredients/${ingredient}-Medium.png`}
                      width={200}
                      height={200}
                      alt='ingredient'
                    />
                    {measurement ? `${measurement} - ` : ''}
                    {ingredient}
                  </Link>
                );
              }

              return null;
            })}
          </div>
        </div>
        {/* <div>Corresponding Glass: {cocktailDetail.strGlass}</div> */}
      </div>
    </div>
  );
};

export default Details;
