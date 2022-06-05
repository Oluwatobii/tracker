import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme'
import Navbar from '../components/NavBar'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null)
  return (
    <ChakraProvider theme={theme}>
      <Navbar user={user} />
      <Component {...pageProps} user={user} />
    </ChakraProvider>
  )
}

export default MyApp
