// import React from 'react';



// import './StyleAll/DeleteButton.css'

// const DeleteButton = () => {
//   const { displayedRecipes, selectedRecipes, setRecipes, setSelectedRecipes } = useBeerStoreHook();

//   const handleDeleteSelectedRecipes = () => {
//     const remainingRecipes = displayedRecipes.filter((recipe) => !selectedRecipes.includes(recipe.id));
//     setRecipes(remainingRecipes);
//     setSelectedRecipes([]);
//   };

//   if (selectedRecipes.length === 0) {
//     return null; // Если нет выбранных рецептов, не показывать кнопку удаления
//   }

//   return (
//     <button className="delete-button" onClick={handleDeleteSelectedRecipes}>
//       Delete Selected
//     </button>
//   );
// };

// export default DeleteButton;


// DeleteButton.js
import React from 'react';
import { useBeerStoreHook } from './useBeerStore';
import './StyleAll/DeleteButton.css';

const DeleteButton = () => {
  const { selectedRecipes, removeSelectedRecipes } = useBeerStoreHook();

  const handleDeleteSelectedRecipes = () => {
    removeSelectedRecipes();
  };

  if (selectedRecipes.length === 0) {
    return null;
  }

  return (
    <button className="delete-button" onClick={handleDeleteSelectedRecipes}>
      Delete Selected
    </button>
  );
};

export default DeleteButton;
