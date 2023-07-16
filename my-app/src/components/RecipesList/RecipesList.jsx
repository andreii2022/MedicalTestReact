import RecipesItem from "../RecipesItem/RecipesItem"
import useRecipesStore from "../../store/store.js";
import { useEffect } from "react";
import React, { useState } from 'react';

import "./recipesList.scss";

const RecipesList = () => {
   const recipes = useRecipesStore((state) => state.recipes);
   const recipesAll = useRecipesStore((state) => state.recipesAll);
   const fetchRecipes = useRecipesStore((state) => state.fetchRecipes);
   const upadteRecipe = useRecipesStore((state) => state.upadteRecipe);
   const [startIndex, setStartIndex] = useState(0);


   useEffect(() => {
      if (recipes.length === 0) {
         fetchRecipes(recipes);
      }
   }, [recipes.length]);

   useEffect(() => {
      if (recipesAll.length <5 && recipes.length !== 0 ) {
         fetchRecipes(recipes);
      }
   }, [recipesAll.length]);

   

   const handleScroll = (e) => {
      const target = e.target;
      if (target.scrollHeight - target.scrollTop === target.clientHeight) {
         upadteRecipe(recipes)
      }
    };
    

   return (
      <>
          <ul className="recipes-list"  style={{ height: "calc(100vh - 130px)", overflow: "auto" }} onScroll={handleScroll}>
        {recipes.map((recipe) => (
          <RecipesItem item={recipe} key={recipe.id} />
        ))}
         </ul >
      </>

   );
};

export default RecipesList;
