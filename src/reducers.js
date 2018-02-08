export function combineReducers(reducers) {
  return (state = {}, action) => {
    return Object.keys(reducers).reduce(
      (nextState, key) => {
        nextState[key] = reducers[key](state[key], action);
        return nextState
      }, {}
    )
  }
}

export function books(state = [], action) {
  let { type, payload } = action
  switch (type) {
    case "ADD_BOOK":
      return [ ...state, payload ]
    case "REMOVE_BOOK":
      return state.filter((element) => {
        return element != payload
      })
    default:
      return state
  }
}

export function recommendedBooks(state=[], action) {
  let { type, payload } = action
  switch (type) {
    case "ADD_RECOMMENDED_BOOK":
      return [ ...state, payload ]
    case "REMOVE_RECOMMENDED_BOOK":
      return state.filter((element) => {
        return element != payload
      })
    default:
      return state
  }
}
