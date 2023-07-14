




// // App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import BeerRecipesApp from './Companents/BeerRecipesApp';
// import RecipeDetails from './Companents/RecipeDetails';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<BeerRecipesApp />} />
//         <Route path="/recipe/:id" element={<RecipeDetails />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;



import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BeerRecipesApp from './Companents/BeerRecipesApp';
import RecipeDetails from './Companents/RecipeDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BeerRecipesApp />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </Router>
  );
};

export default App;




