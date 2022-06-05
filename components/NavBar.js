import { useColorMode } from '@chakra-ui/color-mode'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/button'
import {
  Flex,
  Box,
  Center,
  Heading,
  Image,
  Text,
  Spacer
} from '@chakra-ui/react'

export default function NavBar({ user }) {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <nav>
      <Flex minWidth="max-content" alignItems="center">
        <Box p="4">
          <Heading size="md">Tracker</Heading>
        </Box>
        <Spacer />
        {user ? (
          <Center>
            <Text>Menu List</Text>
          </Center>
        ) : null}
        <Spacer />
        <Box gap="2" p="4">
          <IconButton mt={1} aria-label="Toggle Mode" onClick={toggleColorMode}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </IconButton>
        </Box>
      </Flex>
    </nav>
  )
}
