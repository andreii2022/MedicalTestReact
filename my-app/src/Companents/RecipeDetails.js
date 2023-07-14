// RecipeDetails.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './StyleAll/RecipeDetails.css'

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(`https://api.punkapi.com/v2/beers/${id}`);
        const data = await response.json();
        setRecipe(data[0]);
      } catch (error) {
        console.log('Error fetching recipe:', error);
      }
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) {
    return <div>Recipe not found.</div>;
  }

  const handleNavigateBack = () => {
    navigate('/');
  };

  return (
    <div>
      <h2>Recipe Details</h2>
      <p>Recipe ID: {recipe.id}</p>
      <p>Name: {recipe.name}</p>
      <p>Description: {recipe.description}</p>
      {/* Отображение других деталей рецепта */}
      <button onClick={handleNavigateBack}>Go Back</button>
    </div>
  );
};

export default RecipeDetails;