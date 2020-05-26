import { CREATE_TASK, TASKS, UPDATE_TASK } from '../actions/tasks'
import { findIndex } from 'lodash'

const initialState = []

export const tasks = (state = initialState, action) => {
  switch (action.type) {
    case TASKS:
      return [
        ...state,
        ...action.tasks
      ]
    case UPDATE_TASK:
      state.splice(findIndex(state, ['id', action.task.id]), 1, action.task)
      return [
        ...state
      ]
    case CREATE_TASK:
      return [action.task, ...state]
    default:
      return [
        ...state
      ]
  }
}
