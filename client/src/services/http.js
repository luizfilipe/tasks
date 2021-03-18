import axios from 'axios'
import { identity } from 'lodash'

export default () => {
  axios.interceptors.request.use(identity, error => {
    console.error(error)
    Promise.reject(error)
  })

  return axios.create({
    baseURL: process.env.BASE_URL,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
