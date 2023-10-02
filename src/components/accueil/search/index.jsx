import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image';

import drinkIcon from '../../../asstes/drink-icon.png';
import ingredientIcon from '../../../asstes/ingredient-icon.png';
import listIcon from '../../../asstes/image2.png';

import './Search.scss';

const Search = ({ onSearch }) => {
  const cocktails = useSelector((state) => state.cocktails.cocktails);

  const [searchText, setSearchText] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchText);
  };

  return (
    <div className='search_container'>
      <form className='searchbar' role='search' onSubmit={handleSearch}>
        <input
          className='form-control me-2'
          type='search'
          placeholder='Search for a Cocktail...'
          aria-label='Search'
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button className='btn btn-outline-success' type='submit'>
          Search
        </button>
      </form>
      <div className='stats'>
        <span>
          <Image src={drinkIcon} alt='drinkIcon' />
          Total Drinks: {cocktails.length}
        </span>
        <span>
          <Image src={ingredientIcon} alt='ingredientIcon' />
          Total Ingredients: 489
        </span>

        <span>
          <Image src={listIcon} alt='listIcon' />
          Drink Images: 636(93cc)
        </span>
      </div>
    </div>
  );
};

export default Search;
