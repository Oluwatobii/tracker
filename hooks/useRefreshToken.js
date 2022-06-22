import axios from '../utils/axios'
import useAuth from './useAuth'
import Cookies from 'js-cookie'
import jwt_decode from 'jwt-decode'
import { useRouter } from 'next/router'

const useRefreshToken = () => {
  const { setUser } = useAuth()
  const router = useRouter()

  const refresh = async () => {
    try {
      const response = await axios.post('/api/auth/token', undefined, {
        withCredentials: true
      })

      const token = Cookies.get('accessToken')
      const accessToken = token && token.split(' ')[1]
      const { user } = jwt_decode(accessToken)
      setUser(user)
      localStorage.setItem('user', JSON.stringify(user))
    } catch (error) {
      /* console.error('Refresh accessToken Error: ', error) */
      localStorage.removeItem('user')
      setUser({})
      router.replace('/')
    }
  }
  return { refresh }
}

export default useRefreshToken
