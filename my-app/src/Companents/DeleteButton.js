

// // DeleteButton.js
// import React from 'react';
// import './StyleAll/DeleteButton.css'

// const DeleteButton = ({ onDelete }) => {
//   return (
//     <button className="delete-button" onClick={onDelete}>
//       Удалить выбранные
//     </button>
//   );
// };

// export default DeleteButton;



import React from 'react';
import './StyleAll/DeleteButton.css';

const DeleteButton = ({ onDelete, selectedRecipes }) => {
  const handleClick = () => {
    onDelete(selectedRecipes);
  };

  return (
    <button className="delete-button" onClick={handleClick}>
      Удалить выбранные
    </button>
  );
};

export default DeleteButton;

