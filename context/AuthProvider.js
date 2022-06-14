import { createContext, useMemo, useState } from 'react'

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({})

  const value = useMemo(() => ({ user, setUser }), [user, setUser])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthContext
