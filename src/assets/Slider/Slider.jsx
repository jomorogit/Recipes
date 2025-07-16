import './Slider.css';
import CreateItem from '../CreateItem.jsx';
import { RecipesMass } from '../data/data.js';
import { useState } from 'react';
//не совсем понимаю работу этого всего , нужно разбираться
export default function Slider() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 4;
  const totalRecipes = RecipesMass.length;

  // Формируем 4 карточки рецептов с циклическим индексом
  const recipeElements = Array.from({ length: visibleCount }, (_, i) => {
    const index = (startIndex + i) % totalRecipes;
    const recipe = RecipesMass[index];

    return (
      <div className='slider-block' key={recipe.id}>
        <CreateItem
          title={recipe.title}
          cooking_time={recipe.cooking_time}
          img={recipe.img}
          link={recipe.link}
          includeMeat={recipe.includeMeat}
          containsFlour={recipe.containsFlour}
          Salad={recipe.Salad}
          
        />
      </div>
    );
  });

  // Перелистывание вперёд
  function handleNext() {
    setStartIndex((prevIndex) => (prevIndex + 1) % totalRecipes);
  }

  // Перелистывание назад
  function handlePrev() {
    setStartIndex((prevIndex) => (prevIndex - 1 + totalRecipes) % totalRecipes);
  }

  return (
    <div id='main-slider'>
      <h1 id='slider-text'>Best recipes today</h1>

      <div id='slider-container'>
        <button id='button-left' className='slide-butt' onClick={handlePrev}>&lt;</button>

        <div id="slider">
          {recipeElements}
        </div>

        <button id='button-right' className='slide-butt' onClick={handleNext}>&gt;</button>
      </div>
    </div>
  );
}
