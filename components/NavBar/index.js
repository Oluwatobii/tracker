import { useColorMode } from '@chakra-ui/color-mode'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/button'
import { Flex, Box, Spacer, useMediaQuery } from '@chakra-ui/react'
import SignOutButton from './SignOutButton'
import Navigation from './Navigation'
import ResponsiveNavigation from './ResponsiveNavigation'
import { useContext } from 'react'
import AuthContext from '../../context/AuthProvider'

export default function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode()
  const { user } = useContext(AuthContext)

  const [isNotMobile, isNotTabletPortrait, isNotTabletLandscape] =
    useMediaQuery([
      '(min-width: 30em)',
      '(min-width: 48em)',
      '(min-width: 62em)'
    ])

  /* console.log({ isNotMobile, isNotTabletPortrait, isNotTabletLandscape }) */

  return (
    <Box as="nav">
      <Flex justifyContent="space-between" alignItems="center" w="100%">
        {isNotMobile || isNotTabletPortrait || isNotTabletLandscape ? (
          <Navigation user={user} />
        ) : (
          <ResponsiveNavigation user={user} />
        )}
        <Spacer />
        {'id' in user ? (
          <Box p={1}>
            <SignOutButton />
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
