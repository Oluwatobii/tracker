import { useContext, useState } from 'react'
import AuthContext from '../../context/AuthProvider'
import axios from '../../utils/axios'
import { Button } from '@chakra-ui/react'
import Cookies from 'js-cookie'

const LOGOUT_URL = '/api/auth/logout'

export default function SignOutButton() {
  const [disabled, setDisabled] = useState(false)
  const { setUser } = useContext(AuthContext)

  const handleSignOut = async () => {
    try {
      setDisabled(true)
      await axios.delete(LOGOUT_URL, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true
      })

      setUser({})
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

  return (
    <Button isDisabled={disabled} colorScheme="red" onClick={handleSignOut}>
      Sign Out
    </Button>
  )
}
