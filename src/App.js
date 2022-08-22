import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Recipe from "./recipe";
import RecipeDec from "./recipe_discription";
import "./App.css";

function App() {
  const APP_ID = "f4827c06";
  const api_key = "0f4a0029e2cbd4bf009255add113439d";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [input, setInput] = useState("");

  useEffect(() => {
    getRecipes();
  }, [input]);
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${input}&app_id=${APP_ID}&app_key=${api_key}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
    console.log(data);
  };
  const updateSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };
  const searchfun = (e) => {
    e.preventDefault();

    setInput(search);
    console.log(search);
  };

  return (
    <Router>
      <div className="App">
        <form onSubmit={searchfun} className="search-form">
          <input
            id="inputtext"
            className="search-bar"
            type="text"
            value={search}
            onChange={updateSearch}
          />
          <button className="search-btn" type="submit">
            Search
          </button>
        </form>
        <div className="recipe-container">
          {recipes.map((recipe) => (
            <Recipe
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              image={recipe.recipe.image}
              calories={recipe.recipe.calories}
              cuisine={recipe.recipe.cuisineType}
            />
          ))}
        </div>

        {/* <Routes>
          <Route path="/about" element={<RecipeDec />} />
        </Routes> */}
      </div>
    </Router>
  );
}

export default App;
