/**
 * node_modules
 */
import { createStore, Store } from "redux"

/**
 * reducer
 */
import { initialState, reducer } from "./reducers"

export type StoreState = ReturnType<typeof initialState>
export type ReduxStoreInstance = Store<StoreState>

export function initStore(state = initialState()) {
  return createStore(reducer, state)
}
