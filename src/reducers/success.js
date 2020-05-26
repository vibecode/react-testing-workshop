import { actionTypes } from '../actions'

export default (state = false, { type, payload } = {}) => {
  switch (type) {
    case actionTypes.CORRECT_GUESS:
      return true
    default:
      return state
  }
}
