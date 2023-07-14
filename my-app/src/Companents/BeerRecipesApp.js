// BeerRecipesApp.js
import React, { useEffect } from 'react';
import RecipeList from './RecipeList';
import DeleteButton from './DeleteButton';
import { useBeerStoreHook } from './useBeerStore';
import './StyleAll/BeerRecipesApp.css';

const BeerRecipesApp = () => {
  const { page, setRecipes, setPage } = useBeerStoreHook();

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(`https://api.punkapi.com/v2/beers?page=${page}`);
        const data = await response.json();
        setRecipes(data);
      } catch (error) {
        console.log('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, [page, setRecipes]);

  const handleScroll = (event) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
    if (scrollTop + clientHeight === scrollHeight) {
      setRecipes([]); // Очищаем список перед загрузкой новых рецептов
      setPage(page + 1);
    }
  };

  return (
    <div className="beer-recipes-app">
      <h1 className="app-title">Beer Recipes</h1>
      <RecipeList />
      <DeleteButton />
      <div className="footer">
        <p className="footer-text">Scroll to discover more recipes!</p>
      </div>
    </div>
  );
};

export default BeerRecipesApp;
