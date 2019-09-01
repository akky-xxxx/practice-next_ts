/**
 * node_modules
 */
import { combineReducers } from "redux"

/**
 * reducers
 */
import * as Counter from "./modules/counter"
import * as TodoList from "./modules/todoList"

export function initialState() {
  return {
    counter: Counter.initialState(),
    todoList: TodoList.initialState(),
  }
}

export const reducer = combineReducers({
  counter: Counter.reducer,
  todoList: TodoList.reducer,
})
