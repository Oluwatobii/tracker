import { createContext, useMemo, useState, useEffect } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import NavBar from '../components/NavBar'
import LandingPage from '../components/LandingPage'

const AuthContext = createContext({})
const queryClient = new QueryClient()

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
      <QueryClientProvider client={queryClient}>
        <NavBar />
        {'id' in value.user ? children : <LandingPage />}
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </AuthContext.Provider>
  )
}

export default AuthContext
