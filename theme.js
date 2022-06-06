import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false
}

const colors = {
  brand: {
    100: '#A2DAF7',
    200: '#2A9BD4',
    300: '#2A9BD4',
    500: '#2A9BD4',
    900: '#203346'
  }
}

const theme = extendTheme({ config, colors })

export default theme
