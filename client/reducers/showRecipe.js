import {
  RECEIVE_RECIPES,
  REQUEST_RECIPES,
  RECEIVE_RECIPES_ERROR,
} from '../actions'

function recipes(state = { data: [], loading: false, error: null }, action) {
  const { type, payload } = action

  switch (type) {
    case RECEIVE_RECIPES:
      return { ...state, data: payload, loading: false, error: null }
    case REQUEST_RECIPES:
      return { ...state, loading: true, error: null }
    case RECEIVE_RECIPES_ERROR:
      return { ...state, loading: false, error: payload }
    default:
      return state
  }
}

export default recipes
