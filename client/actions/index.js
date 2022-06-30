// THIS IS WHERE THE ACTION CREATORS WILL GO
import request from 'superagent'

// action types - SNAKE_CASE
export const RECEIVE_RECIPES = 'RECEIVE_RECIPES'
export const REQUEST_RECIPES = 'REQUEST_RECIPES'
export const RECEIVE_RECIPES_ERROR = 'RECEIVE_RECIPES_ERROR'

// action creators - functions - camelCase
export function recieveRecipes(recipes) {
  return {
    type: RECEIVE_RECIPES,
    payload: recipes,
  }
}

export function requestRecipes() {
  return {
    type: REQUEST_RECIPES,
  }
}

export function requestRecipesError(err) {
  return {
    type: RECEIVE_RECIPES_ERROR,
    payload: err,
  }
}

export function fetchRecipes() {
  return (dispatch) => {
    dispatch(requestRecipes())
    return request
      .get('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
      .set('Accept', 'application/json')
      .then((res) => {
        dispatch(recieveRecipes(res.body.meals))
        return null
      })
      .catch((err) => {
        dispatch(requestRecipesError(err))
        console.log(err)
      })
  }
}
