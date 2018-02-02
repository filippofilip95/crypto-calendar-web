import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  onOpenDrawer: null,
  onCloseDrawer: null,
})

export const AppTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  drawerVisible: false,
})

/* ------------- Reducers ------------- */

export const onOpenDrawer = state => state.merge({ drawerVisible: true })

export const onCloseDrawer = state => state.merge({ drawerVisible: false })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ON_OPEN_DRAWER]: onOpenDrawer,
  [Types.ON_CLOSE_DRAWER]: onCloseDrawer,
})
