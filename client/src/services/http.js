import axios from 'axios'
export default () => {
  axios.interceptors.request.use(config => config, error => {
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
