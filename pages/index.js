import HomePage from '../components/HomePage'
import LandingPage from '../components/LandingPage'

export default function Home({ user }) {
  return <div>{user ? <HomePage /> : <LandingPage />}</div>
}
