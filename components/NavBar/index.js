import { useColorMode } from '@chakra-ui/color-mode'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/button'
import { Flex, Box, Button, Spacer, useMediaQuery } from '@chakra-ui/react'
import Navigation from './Navigation'
import ResponsiveNavigation from './ResponsiveNavigation'

export default function NavBar({ user }) {
  const { colorMode, toggleColorMode } = useColorMode()

  const [isNotMobile, isNotTabletPortrait, isNotTabletLandscape] =
    useMediaQuery([
      '(min-width: 30em)',
      '(min-width: 48em)',
      '(min-width: 62em)'
    ])

  console.log({ isNotMobile, isNotTabletPortrait, isNotTabletLandscape })

  return (
    <Box as="nav">
      <Flex justifyContent="space-between" alignItems="center" w="100%">
        {isNotMobile || isNotTabletPortrait || isNotTabletLandscape ? (
          <Navigation user={user} />
        ) : (
          <ResponsiveNavigation user={user} />
        )}
        <Spacer />
        {!user ? (
          <Box p={1}>
            <Button colorScheme="red">Sign Out</Button>
          </Box>
        ) : null}
        <Box gap="2" p={3}>
          <IconButton aria-label="Toggle Mode" onClick={toggleColorMode}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </IconButton>
        </Box>
      </Flex>
    </Box>
  )
}
