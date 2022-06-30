import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { fetchRecipes } from '../actions'

import Recipe from './Recipe'

function LoadRecipes() {
  // const sub = useSelector((state) => state.subreddits)
  const [newRecipe, setNewRecipe] = useState('')
  const dispatch = useDispatch()
  const recipesList = useSelector((state) => state.recipes.data)

  function inputChangeHandler(e) {
    setNewRecipe(e.target.value)
  }

  return (
    <div>
      {/* <button onClick={() => dispatch(fetchPosts('newzealand'))}>
        Fetch Posts
      </button>
      {children} */}
      <div>
        Get recipe by alphabet letter, type the letter you want to view:
      </div>

      <button onClick={() => dispatch(fetchRecipes(newRecipe))}>
        Fetch new recipes
      </button>
      <input type="text" value={newRecipe} onChange={inputChangeHandler} />

      <div>
        {' '}
        {recipesList.map((recipe, i) => (
          <Recipe
            key={i}
            strMeal={recipe.strMeal}
            image={recipe.strMealThumb}
          />
        ))}{' '}
      </div>
    </div>
  )
}

export default LoadRecipes
