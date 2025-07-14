import { useState, useEffect } from 'react';
import Search from '../Search/Search.jsx';
import CreateItem from './CreateItemCatalog.jsx';
import { RecipesMass } from '../data/data.js';
import './Catalog.css';

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function Catalog() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const shuffled = shuffleArray(RecipesMass);
    setRecipes(shuffled);
  }, []);

  let filtered;
  if (search.trim() === '') {
    filtered = recipes;
  } else {
    filtered = recipes.filter(recipe => {
      const recipeTitle = recipe.title.toLowerCase();
      const searchTerm = search.toLowerCase();
      return recipeTitle.includes(searchTerm);
    });
  }

  return (
    <>
      <Search inputValue={search} setInputValue={setSearch} />
      <div id="catalog-main-container">
        {filtered.length > 0 ? (
          filtered.map(recipe => (
            <CreateItem
              key={recipe.id}
              title={recipe.title}
              cooking_time={recipe.cooking_time}
              img={recipe.img}
            />
          ))
        ) : (
          <p></p>
        )}
      </div>
    </>
  );
}
