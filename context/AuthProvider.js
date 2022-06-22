import { createContext, useMemo, useState, useEffect } from 'react'

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({})

  useEffect(() => {
    const valueFromLocalStorage = localStorage.getItem('user')
    const userFromLocalStorage = !!valueFromLocalStorage
      ? JSON.parse(valueFromLocalStorage)
      : {}
    setUser(userFromLocalStorage)
  }, [])

  const value = useMemo(() => ({ user, setUser }), [user, setUser])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthContext
