import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import Search from '../search';
import { getCocktails } from '../../../redux/cocktails/cocktailsAsyncThunk';
import { searchCocktails } from '../../../redux/search/searchAsyncThunk';
import { setCurrentPage } from '../../../redux/cocktails/cocktailSlice';

import './Popular.scss';
import { Pagination } from 'antd';

const Popular = () => {
  const dispatch = useDispatch();
  const { cocktails, currentPage, itemsPerPage, loading } = useSelector(
    (state) => state.cocktails
  );
  const filteredCocktails = useSelector((state) => state.search.results);

  const [searchText, setSearchText] = useState('');
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    getAlphabeticLetters().map((el) => {
      dispatch(getCocktails(el));
    });
  }, [dispatch]);

  const getAlphabeticLetters = () => {
    const letters = [];
    for (let i = 97; i <= 122; i++) {
      letters.push(String.fromCharCode(i));
    }
    return letters;
  };

  const handleSearch = (text) => {
    setSearchText(text);
    dispatch(searchCocktails(text));
    setSearched(true);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentCocktails = cocktails.slice(startIndex, endIndex);

  const handleNextPage = (page) => {
    dispatch(setCurrentPage(page));
  };

  return (
    <div className={`cocktail_container`}>
      <Search onSearch={handleSearch} />
      <div className='drinks'>
        {loading ? (
          <div>loading...</div>
        ) : (
          <>
            {searched
              ? filteredCocktails.map((cocktail) => (
                  <Link
                    href={`/${cocktail?.idDrink}`}
                    className='myCard'
                    key={cocktail?.idDrink}
                  >
                    <div className='innerCard'>
                      <div className='frontSide'>
                        <Image
                          className='frontSide_image'
                          src={cocktail?.strDrinkThumb}
                          alt={cocktail?.strDrink}
                          width={200}
                          height={200}
                        />
                        <span>{cocktail?.strDrink}</span>
                      </div>
                      <div className='backSide'>
                        <p>{cocktail?.strAlcoholic}</p>
                        <p className='title'>{cocktail?.strCategory}</p>
                      </div>
                    </div>
                  </Link>
                ))
              : currentCocktails.map((cocktail) => (
                  <Link
                    href={`/${cocktail?.idDrink}`}
                    className='myCard'
                    key={cocktail?.idDrink}
                  >
                    <div className='innerCard'>
                      <div className='frontSide'>
                        <Image
                          className='frontSide_image'
                          src={cocktail?.strDrinkThumb}
                          alt={cocktail?.strDrink}
                          width={200}
                          height={200}
                        />
                        <span>{cocktail?.strDrink}</span>
                      </div>
                      <div className='backSide'>
                        <p>{cocktail?.strAlcoholic}</p>
                        <p className='title'>{cocktail?.strCategory}</p>
                      </div>
                    </div>
                  </Link>
                ))}
          </>
        )}
      </div>
      {currentCocktails && (
        <Pagination
          current={currentPage}
          total={cocktails.length}
          pageSize={itemsPerPage}
          onChange={handleNextPage}
          className='pagination'
        />
      )}
    </div>
  );
};

export default Popular;
