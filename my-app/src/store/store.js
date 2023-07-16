import { create } from "zustand";

const useRecipesStore = create((set) => ({
   recipes: [],
   recipesAll: [],
   selectedRecipes: [],
   currentPage: 1,
   selectRecipe: (id) => set((state) => {
      const selectedRecipe = state.recipes.find((item) => item.id === id);
      if (selectedRecipe) {
         return {
            selectedRecipes: [...state.selectedRecipes, selectedRecipe]
         };
      }
      return state;
   }),
   upadteRecipe: (res) => set((state) => ({
      recipes: state.recipes.splice(0, 5),
      recipes: state.recipes.concat(state.recipesAll.slice(0,5)),
      recipesAll: state.recipesAll.slice(5, state.recipesAll.length)
   })),
   removeSelectedRecipe: (id) => set((state) => ({
      selectedRecipes: state.selectedRecipes.filter((item) => item.id !== id)
   })),

   removeSelectedRecipes: () => set((state) => ({
      recipes: state.recipes.filter((item) => !state.selectedRecipes.includes(item))
   })),
   addNewAfterRemove: () => set((state) => ({
      recipes: state.recipes.concat(state.recipesAll.splice(0,state.selectedRecipes.length)),
      recipesAll: state.recipesAll.slice(state.selectedRecipes.length, state.recipesAll.length),
      selectedRecipes: [],
   })),
   fetchRecipes: async (resip) => {
      const { currentPage } = useRecipesStore.getState();
      const response = await fetch(`https://api.punkapi.com/v2/beers?page=${currentPage}`);
      const result = await response.json();
      let resipesJson, resipesJsonAll
      if(resip.length === 0){
         resipesJson = result.slice(0, 15);
         resipesJsonAll = result.slice(15);
      } else {
         resipesJsonAll = result
      }
      set((state) => ({
         recipes: state.recipes.length === 0 ? resipesJson : state.recipes,
         recipesAll: state.recipesAll.concat(resipesJsonAll),
         currentPage: state.currentPage + 1
      }));
   }
}));

export default useRecipesStore;