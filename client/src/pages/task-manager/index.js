import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Task } from './components/task'
import { createTask, getTasks } from '../../services/tasks'
import { listStatuses } from '../../services/statuses'
import { Container, Text, Title } from './styles'
import { Form } from './components/form'

export const TaskManager = () => {
  const [statuses, setStatuses] = useState(null)
  const tasks = useSelector(state => state.tasks)
  const dispatch = useDispatch()

  useEffect(() => {
    Promise.all([
      listStatuses(),
      getTasks(dispatch)
    ]).then(([statuses,]) => setStatuses(statuses))
      .catch(console.error)
  }, [])

  return <Container>
    <Title>Task Manager</Title>
    <Form />
    {tasks.length ? tasks.map(task => <Task key={task.id} {...task} statuses={statuses} />) : <Text>No Tasks</Text>}
  </Container>
}
