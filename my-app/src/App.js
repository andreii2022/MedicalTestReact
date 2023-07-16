import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./Pages/Home/Home";
import RecipePage from "./Pages/RecipePage/Recipe";
import HeaderNav from "./components/Header/HeaderNav";
function App() {
  return (
    <div className="App">
      <HeaderNav />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes/:id" element={<RecipePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
