/**
 * node_modules
 */
import uuid from "uuid"

/**
 * action types
 */
import Types from "./actionTypes"

export const addTodo = (task: string) => ({
  type: Types.ADD_TODO,
  payload: {
    id: uuid(),
    isDone: false,
    task,
  }
})

export const doneTodo = (id: string) => ({
  type: Types.DONE_TODO,
  payload: { id }
})
