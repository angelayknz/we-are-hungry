import { RECEIVE_RECIPES } from '../actions'

function recipes(state = [], action) {
  const { type, payload } = action

  switch (type) {
    case RECEIVE_RECIPES:
      return payload
    default:
      return state
  }
}

export default recipes
