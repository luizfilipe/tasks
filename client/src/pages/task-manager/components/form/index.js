import React, { useState } from 'react'
import { debounce } from 'lodash'
import { createTask } from '../../../../services/tasks'
import { useDispatch } from 'react-redux'
import { Button, Container } from './styles'

export const Form = () => {
  const [loading, setLoading] = useState(false)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const dispatch = useDispatch()

  const addTask = debounce(() => {
    if (!loading) {
      setLoading(true)
      createTask(dispatch, {
        description,
        title
      }).then(() => {
        setTitle('')
        setDescription('')
        setLoading(false)
      })
    }
  })
  return (
    <Container>
      <label>Title</label>
      <input type="text" value={title} onChange={evt => setTitle(evt.target.value)} />
      <label>Description</label>
      <input type="text" value={description} onChange={evt => setDescription(evt.target.value)} />
      <Button onClick={addTask} loading={loading ? 1: 0}>
        Add Task
      </Button>
    </Container>
  )
}
