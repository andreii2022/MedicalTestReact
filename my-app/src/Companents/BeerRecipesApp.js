// // BeerRecipesApp.js
// import React, { useEffect } from 'react';
// import RecipeList from './RecipeList';
// import DeleteButton from './DeleteButton';
// import useBeerStore from './useBeerStore';
// import './StyleAll/BeerRecipesApp.css';

// const BeerRecipesApp = () => {
//   const {
//     recipes,
//     displayedRecipes,
//     selectedRecipes,
//     setRecipes,
//     setSelectedRecipes,
//     removeSelectedRecipes,
//     fetchNextPage,
//   } = useBeerStore();

//   useEffect(() => {
//     fetchRecipes();
//   }, []);

//   const fetchRecipes = async () => {
//     try {
//       const response = await fetch('https://api.punkapi.com/v2/beers?page=1');
//       const data = await response.json();
//       setRecipes(data);
//     } catch (error) {
//       console.log('Error fetching recipes:', error);
//     }
//   };

//   const handleRecipeSelection = (recipeId) => {
//     const isSelected = selectedRecipes.includes(recipeId);
//     if (isSelected) {
//       setSelectedRecipes(selectedRecipes.filter((id) => id !== recipeId));
//     } else {
//       setSelectedRecipes([...selectedRecipes, recipeId]);
//     }
//   };

//   const handleDeleteSelectedRecipes = () => {
//     removeSelectedRecipes();
//   };

//   const handleScroll = (event) => {
//     const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
//     if (scrollTop + clientHeight === scrollHeight) {
//       fetchNextPage();
//     }
//   };

//   return (
//     <div className="beer-recipes-app" onScroll={handleScroll}>
//       <h1 className="app-title">Рецепты пива</h1>
//       <RecipeList
//         recipes={displayedRecipes}
//         selectedRecipes={selectedRecipes}
//         onRecipeSelection={handleRecipeSelection}
//       />
//       {selectedRecipes.length > 0 && <DeleteButton onDelete={handleDeleteSelectedRecipes} />}
//       <div className="footer">
//         <p className="footer-text">Прокрутите, чтобы увидеть больше рецептов!</p>
//       </div>
//     </div>
//   );
// };

// export default BeerRecipesApp;


import React, { useEffect } from 'react';
import RecipeList from './RecipeList';
import DeleteButton from './DeleteButton';
import useBeerStore from './useBeerStore';
import './StyleAll/BeerRecipesApp.css';

const BeerRecipesApp = () => {
  const {
    recipes,
    displayedRecipes,
    selectedRecipes,
    setRecipes,
    setSelectedRecipes,
    removeSelectedRecipes,
    fetchNextPage,
  } = useBeerStore();

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const response = await fetch('https://api.punkapi.com/v2/beers?page=1');
      const data = await response.json();
      setRecipes(data);
    } catch (error) {
      console.log('Error fetching recipes:', error);
    }
  };

  const handleRecipeSelection = (recipeId) => {
    const isSelected = selectedRecipes.includes(recipeId);
    if (isSelected) {
      setSelectedRecipes(selectedRecipes.filter((id) => id !== recipeId));
    } else {
      setSelectedRecipes([...selectedRecipes, recipeId]);
    }
  };

  const handleDeleteSelectedRecipes = () => {
    removeSelectedRecipes();
  };

  const handleScroll = (event) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
    if (scrollTop + clientHeight === scrollHeight) {
      fetchNextPage();
    }
  };

  return (
    <div className="beer-recipes-app" onScroll={handleScroll}>
      <h1 className="app-title">Рецепты пива</h1>
      <RecipeList
        recipes={displayedRecipes}
        selectedRecipes={selectedRecipes}
        onRecipeSelection={handleRecipeSelection}
      />
      {selectedRecipes.length > 0 && <DeleteButton onDelete={handleDeleteSelectedRecipes} />}
      <div className="footer">
        <p className="footer-text">Прокрутите, чтобы увидеть больше рецептов!</p>
      </div>
    </div>
  );
};

export default BeerRecipesApp;
