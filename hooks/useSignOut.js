import { useContext, useState } from 'react'
import AuthContext from '../context/AuthProvider'
import Cookies from 'js-cookie'
import useClient from '../hooks/useClient'

const LOGOUT_URL = '/api/auth/logout'

const useSignOut = () => {
  const [disabled, setDisabled] = useState(false)
  const { setUser } = useContext(AuthContext)
  const client = useClient()

  const handleSignOut = async () => {
    try {
      setDisabled(true)
      await client.delete(LOGOUT_URL, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true
      })

      setUser({})
      localStorage.removeItem('user')
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
