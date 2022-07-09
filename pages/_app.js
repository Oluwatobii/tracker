import '../styles/globals.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme'
import Navbar from '../components/NavBar'
import { AuthProvider } from '../context/AuthProvider'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
        </QueryClientProvider>
      </AuthProvider>
    </ChakraProvider>
  )
}

export default MyApp
