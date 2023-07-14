
import create from 'zustand';

const useBeerStore = create((set) => ({
  recipes: [],
  displayedRecipes: [],
  selectedRecipes: [],
  page: 1,
  setRecipes: (recipes) => set({ recipes, displayedRecipes: recipes.slice(0, 15) }),
  setSelectedRecipes: (selectedRecipes) => set({ selectedRecipes }),
  removeSelectedRecipes: () =>
    set((state) => ({
      displayedRecipes: state.displayedRecipes.filter((recipe) => !state.selectedRecipes.includes(recipe.id)),
      selectedRecipes: [],
    })),
  setPage: (page) => set((state) => ({ ...state, page })),
}));

export default useBeerStore;

