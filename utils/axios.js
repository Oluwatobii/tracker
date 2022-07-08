import axios from 'axios'
import clientRefreshToken from './refreshToken'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

export default axios.create({
  baseURL: BASE_URL
})

export const client = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true
})

client.interceptors.request.use(
  config => {
    return config
    /*
    const CancelToken = axios.CancelToken
    return {
      ...config,
      cancelToken: new CancelToken(cancel => cancel('Cancel repeated request'))
    }
    */
  },
  error => Promise.reject(error)
)

client.interceptors.response.use(
  response => response,
  async error => {
    const prevRequest = error && error.config
    if (error && error.response && error.response.status === 403) {
      await clientRefreshToken()
      return await client(prevRequest)
    }
    return Promise.reject(error)
  }
)

export const server = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' }
})
