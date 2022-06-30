import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchRecipes } from '../actions'

import Recipe from './Recipe'

function LoadRecipesList() {
  const dispatch = useDispatch()
  const recipesList = useSelector((state) => state.recipes.data)

  return (
    <div>
      <button
        onClick={() => {
          dispatch(fetchRecipes())
        }}
      >
        Fetch Recipes
      </button>

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

export default LoadRecipesList
