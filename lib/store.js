import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { reducer as formReducer } from 'redux-form'
import reducers from '../store/reducers'
import Immutable from 'seamless-immutable'

export const initStore = (initialState = {}) => {
  if (!initialState.toJS) initialState = Immutable(initialState)

  return createStore(
    combineReducers({
      // Setup reducers
      ...reducers,
      form: formReducer,
    }),
    initialState,
    composeWithDevTools(),
  )
}
