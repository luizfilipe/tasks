export const TASKS = 'tasks'
export const CREATE_TASK = 'create-task'
export const UPDATE_TASK = 'update-task'

export const setTasks = tasks => ({
  type: TASKS,
  tasks
})

export const addTask = task => ({
  type: CREATE_TASK,
  task
})

export const updateTask = task => ({
  type: UPDATE_TASK,
  task
})
