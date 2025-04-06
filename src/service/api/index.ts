import axios from 'axios'

export const api = axios.create({
  baseURL: '/api/v1',
})

api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject({
      name: error.response.data.name,
      message: error.response.data.message,
      status: error.response.status,
    })
  }
)
