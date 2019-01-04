import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './actionTypes';
// import * as actionCreators from '../actions'
let nextTodoId = 0
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

// export const REMOVE_TODO = 'REMOVE_TODO'
// export function removeTodo(id) {
//   return {
//     type: 'REMOVE_TODO',
//     id
//   }
// }
export const removeTodo = id => {
  return {
    type: 'REMOVE_TODO',
    id: id
  }
}

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}