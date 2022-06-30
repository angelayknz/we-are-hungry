// THIS IS WHERE THE ACTION CREATORS WILL GO
import request from 'superagent'

export const RECEIVE_RECIPES = 'RECEIVE_RECIPES'

export function recieveRecipes(recipes) {
  return {
    type: RECEIVE_RECIPES,
    payload: recipes.meals,
  }
}

export function fetchRecipes() {
  return (dispatch) => {
    return request
      .get('www.themealdb.com/api/json/v1/1/search.php?f=a')
      .then((res) => {
        dispatch(recieveRecipes(res.body))
        return null
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
