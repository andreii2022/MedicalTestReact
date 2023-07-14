


// import React from 'react';
// import { Link } from 'react-router-dom';
// import './StyleAll/RecipeList.css'

// const RecipeList = ({ recipes, selectedRecipes, onRecipeSelection }) => {
//   return (
//     <div className="recipes-list">
//       {recipes.map((recipe) => (
//         <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
//           <div
//             className={`recipe-card ${selectedRecipes.includes(recipe.id) ? 'selected' : ''}`}
//             onClick={() => onRecipeSelection(recipe.id)}
//             onContextMenu={(e) => {
//               e.preventDefault();
//               onRecipeSelection(recipe.id);
//             }}
//           >
//             <h3 className="recipe-name">{recipe.name}</h3>
//             <p className="recipe-description">{recipe.description}</p>
//           </div>
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default RecipeList;




import React from 'react';
import { Link } from 'react-router-dom';
import './StyleAll/RecipeList.css';

const RecipeList = ({ recipes, selectedRecipes, onRecipeSelection }) => {
  const handleContextMenu = (e, recipeId) => {
    e.preventDefault();
    onRecipeSelection(recipeId);
  };

  return (
    <div className="recipes-list">
      {recipes.map((recipe) => (
        <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
          <div
            className={`recipe-card ${selectedRecipes.includes(recipe.id) ? 'selected' : ''}`}
            onClick={() => onRecipeSelection(recipe.id)}
            onContextMenu={(e) => handleContextMenu(e, recipe.id)}
          >
            <h3 className="recipe-name">{recipe.name}</h3>
            <p className="recipe-description">{recipe.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RecipeList;











