import { RECEIVE_ENTRIES, CREATE_DECK } from '../actions'

function entries(state = {}, action) {
  switch(action.type) {
    case RECEIVE_ENTRIES:
      return {
        ...state,
        ...action.entries
      }
    case CREATE_DECK:
      return {
        ...state,
        ...action.deckTitle
      }
    default:
      return state
  }
}

export default entries