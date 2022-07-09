import { createContext, useMemo, useState, useEffect } from 'react'
import LandingPage from '../components/LandingPage'

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({})
  const value = useMemo(() => ({ user, setUser }), [user, setUser])

  useEffect(() => {
    const valueFromLocalStorage = localStorage.getItem('user')
    const userFromLocalStorage = !!valueFromLocalStorage
      ? JSON.parse(valueFromLocalStorage)
      : value.user
    setUser(userFromLocalStorage)
  }, [])

  return (
    <AuthContext.Provider value={value}>
      {'id' in value.user ? children : <LandingPage />}
    </AuthContext.Provider>
  )
}

export default AuthContext
