import http from './http'
import { addTask, setTasks, updateTask } from '../store/actions/tasks'

export const getTasks = async dispatch => {
  try {
    const response = await http().get('/tasks')
    dispatch(setTasks(response.data))
  } catch (err) {
    console.error(err.message)
  }
}

export const changeStatus = async (dispatch, { id, status, ...rest }) => {
  try {
    await http().put(`/tasks/${id}`, { status })
    dispatch(updateTask({
      id,
      status, ...rest
    }))
  } catch (err) {
    console.error(err.message)
  }
}

export const createTask = async (dispatch, task) => {
  try {
    const response = await http().post(`/tasks`, task)
    dispatch(addTask(response.data))
  } catch (err) {
    console.error(err.message)
  }
}
