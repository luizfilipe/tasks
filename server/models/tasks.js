import {sequelize} from './connection'
import Sequelize from 'sequelize'
export const Tasks = sequelize.define('tasks', {
  title: Sequelize.STRING,
  description: Sequelize.STRING,
  status: Sequelize.ENUM('Pending', 'In Progress', 'Done')
}, {
  timestamps: false
})

Tasks.sync({
  force: process.env.SYNC === 'yes'
})
