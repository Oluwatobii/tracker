import { client } from '../utils/axios'
import Cookies from 'js-cookie'
import jwt_decode from 'jwt-decode'

const clientRefreshToken = async () => {
  try {
    const response = await client.get('/api/auth/token', {
      withCredentials: true
    })

    const token = Cookies.get('accessToken')
    const accessToken = token && token.split(' ')[1]
    const { user } = jwt_decode(accessToken)
    localStorage.setItem('user', JSON.stringify(user))
  } catch (error) {
    localStorage.removeItem('user')
    /* console.error('Refresh accessToken Error: ', error) */
  }
}

export default clientRefreshToken
