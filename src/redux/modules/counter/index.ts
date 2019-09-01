import { Actions } from "../../actions"
import Types from "./actionTypes"

interface State {
  count: number
}

export const initialState = (injects?: State): State => ({
  count: 0,
  ...injects,
})

export const reducer = (state = initialState(), action: Actions): State => {
  switch (action.type) {
    case Types.INCREMENT:
      return {
        ...state,
        count: state.count += 1,
      }
    case Types.DECREMENT:
      return {
        ...state,
        count: state.count -= 1,
      }
    case Types.SET_COUNT:
      return {
        ...state,
        count: action.payload.amount,
      }
    default:
      return {...state}
  }
}
