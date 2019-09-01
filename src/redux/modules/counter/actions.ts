/**
 * action types
 */
import Types from "./actionTypes"

export function increment () {
  return {
    type: Types.INCREMENT,
  }
}

export function decrement () {
  return {
    type: Types.DECREMENT,
  }
}

export function setCount (amount: number) {
  return {
    type: Types.SET_COUNT,
    payload: { amount },
  }
}
