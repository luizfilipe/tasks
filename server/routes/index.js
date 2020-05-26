import express from 'express'
import Joi from '@hapi/joi'
import { schemaValidation } from '../middlewares/schema-validation'
import { changeStatus, createTasks, getTasks } from './tasks'
import { listStatuses } from './statuses'

export const router = new express.Router()

router.get('/tasks', getTasks)

router.post('/tasks', schemaValidation(Joi.object({
  title: Joi.string(),
  description: Joi.string(),
}), 'body'), createTasks)

router.put(`/tasks/:id`, schemaValidation(Joi.object({
  status: Joi.any().valid('Pending', 'In Progress', 'Done')
}), 'body'), changeStatus)

router.get('/statuses', listStatuses)
