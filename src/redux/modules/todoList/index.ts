import { Actions } from "../../actions"
import Types from "./actionTypes"

interface Todo {
  id: string
  isDone: boolean
  task: string
}

interface State {
  todoList: Todo[]
}

export const initialState = (injects?: State): State => ({
  todoList: [],
  ...injects,
})

export const reducer = (state = initialState(), action: Actions): State => {
  switch (action.type) {
    case Types.ADD_TODO:
      return {
        ...state,
        todoList: [...state.todoList, { ...action.payload }],
      }
    case Types.DONE_TODO:
      return {
        ...state,
        todoList: [...state.todoList].filter((todo) => todo.id === action.payload.id)
      }
    default:
      return {...state}
  }
}
