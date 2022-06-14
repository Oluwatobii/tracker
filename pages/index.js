import { useContext } from 'react'
import HomePage from '../components/HomePage'
import LandingPage from '../components/LandingPage'
import AuthContext from '../context/AuthProvider'

export default function Home() {
  const { user } = useContext(AuthContext)

  return <div>{'id' in user ? <HomePage /> : <LandingPage />}</div>
}
