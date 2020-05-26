import http from './http'

export const listStatuses = async () => {
  try {
    const response = await http().get('/statuses')
    return response.data
  } catch (err) {
    console.error(err.message)
  }
}
