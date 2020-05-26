import { Tasks } from '../models/tasks'

export const getTasks = async (req, res) => {
  res
    .status(200)
    .json(await Tasks.findAll())
    .end()
}
export const createTasks = async (req, res) => {
  res
    .status(200)
    .json(await Tasks.create({
      ...req.body,
      status: 'Pending'
    }))
}

export const changeStatus = async (req, res) => {
  res
    .status(200)
    .json(await Tasks.update(req.body, { where: req.params, returning: true }))
}
