import React from 'react';
import useRecipesStore from "../../BeerStore/store.js";
import "./headerNav.scss";


const HeaderNav = () => {
    const selectedRecipes = useRecipesStore((state) => state.selectedRecipes);
    const removeSelectedRecipes = useRecipesStore((state) => state.removeSelectedRecipes);
    const addNewAfterRemove = useRecipesStore((state) => state.addNewAfterRemove);
    
    const handleDelete = () => {
        removeSelectedRecipes()
        addNewAfterRemove()
     }
  
    return (
         <div className='header'>
            <a className='img-holder' href="/">
                <img src={require("../../Images/log.png")} alt="" />      
            </a>
            <div>
                {selectedRecipes.length >= 1 ?
                <button onClick={() => handleDelete()}>Delete Recipes</button> :
                null}
            </div>    
        </div>  
    );
};

export default HeaderNav;