import { useState } from 'react'
import useAuth from './useAuth'
import Cookies from 'js-cookie'
import { client } from '../utils/axios'
import { useRouter } from 'next/router'

const LOGOUT_URL = '/api/auth/logout'

const useSignOut = () => {
  const router = useRouter()
  const [disabled, setDisabled] = useState(false)
  const { setUser } = useAuth()

  const handleSignOut = async () => {
    try {
      setDisabled(true)
      await client.delete(LOGOUT_URL, {
        headers: { 'Content-Type': 'application/json' }
      })
      setUser({})
      localStorage.removeItem('user')
      router.push('/')
      Cookies.remove('accessToken')
      Cookies.remove('refreshToken')
      setDisabled(false)
    } catch (error) {
      setDisabled(false)
      console.error('Log out Error: ', error)
      /*
      if (!error.response || !error.response.data || !error.response.data.error)
        console.error(error.message)
      else console.error(error.response.data.error)
      */
    }
  }
  return { disabled, setDisabled, handleSignOut }
}

export default useSignOut
