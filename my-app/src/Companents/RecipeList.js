// import React from 'react';
// import { useBeerStoreHook } from './useBeerStore';
// import './StyleAll/RecipeList.css'

// const RecipeList = () => {
//   const { displayedRecipes, selectedRecipes, setSelectedRecipes } = useBeerStoreHook();

//   const handleRecipeSelection = (recipeId) => {
//     const isSelected = selectedRecipes.includes(recipeId);
//     if (isSelected) {
//       setSelectedRecipes(selectedRecipes.filter((id) => id !== recipeId));
//     } else {
//       setSelectedRecipes([...selectedRecipes, recipeId]);
//     }
//   };

//   return (
//     <div className="recipes-list">
//       {displayedRecipes.map((recipe) => (
//         <div
//           key={recipe.id}
//           className={`recipe-card ${selectedRecipes.includes(recipe.id) ? 'selected' : ''}`}
//           onClick={() => handleRecipeSelection(recipe.id)}
//         >
//           <h3 className="recipe-name">{recipe.name}</h3>
//           <p className="recipe-description">{recipe.description}</p>
//           {selectedRecipes.includes(recipe.id) && (
//             <div className="recipe-overlay">
//               <span className="overlay-text">Selected!</span>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default RecipeList;




// RecipeList.js
import React from 'react';
import { useBeerStoreHook } from './useBeerStore';
import './StyleAll/RecipeList.css';

const RecipeList = () => {
  const { displayedRecipes, selectedRecipes, setSelectedRecipes, removeSelectedRecipes } = useBeerStoreHook();

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

  return (
    <div className="recipes-list">
      {displayedRecipes.map((recipe) => (
        <div
          key={recipe.id}
          className={`recipe-card ${selectedRecipes.includes(recipe.id) ? 'selected' : ''}`}
          onClick={() => handleRecipeSelection(recipe.id)}
          onContextMenu={(e) => {
            e.preventDefault();
            handleRecipeSelection(recipe.id);
          }}
        >
          <h3 className="recipe-name">{recipe.name}</h3>
          <p className="recipe-description">{recipe.description}</p>
        </div>
      ))}
      {selectedRecipes.length > 0 && (
        <button className="delete-button" onClick={handleDeleteSelectedRecipes}>
          Delete Selected
        </button>
      )}
    </div>
  );
};

export default RecipeList;
