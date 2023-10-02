const API = {
  cocktailsByName: 'www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita',
  cocktailsListByFirstLetter:
    'www.thecocktaildb.com/api/json/v1/1/search.php?f=a',
  ingredientsByName: 'www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka',
  cocktailDetailsById: 'www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007',
  ingredientById: 'www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=552',
  randomCocktail: 'www.thecocktaildb.com/api/json/v1/1/random.php',
  searchByIngredient: 'www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin',
  filterByAlcoholic:
    'www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic',
  filterByNonAlcoholic:
    'www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic',
  filterByCategory:
    'www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink',
  //   filterByNonAlcoholic: 'www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic',
  //   filterByNonAlcoholic: 'www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic',
};

export { API };
