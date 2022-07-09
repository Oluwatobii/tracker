import { useColorMode } from '@chakra-ui/color-mode'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/button'
import { Box, HStack, Spacer, useMediaQuery, Heading } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import SignOutButton from './SignOutButton'
import Navigation from './Navigation'
import ResponsiveNavigation from './ResponsiveNavigation'
import { useContext } from 'react'
import AuthContext from '../../context/AuthProvider'
import TrackerLogo from '../../assets/svgs/TrackerLogo'

export default function NavBar() {
  const router = useRouter()
  const { colorMode, toggleColorMode } = useColorMode()
  const { user } = useContext(AuthContext)

  const [isTabletSize] = useMediaQuery(['(min-width: 48em)'])

  return (
    <HStack spacing={{ base: 1, lg: 40 }} justify="space-between">
      {isTabletSize ? (
        <Box
          p={3}
          style={{ cursor: 'pointer' }}
          onClick={() => router.push('/')}
        >
          <HStack>
            <TrackerLogo />
            <Heading size="md">Tracker</Heading>
          </HStack>
        </Box>
      ) : null}
      <Box>
        {isTabletSize ? (
          <Navigation user={user} />
        ) : (
          <ResponsiveNavigation user={user} />
        )}
        <Spacer />
      </Box>
      <HStack p={3}>
        {'id' in user && isTabletSize ? <SignOutButton /> : null}
        <IconButton aria-label="Toggle Mode" onClick={toggleColorMode}>
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </IconButton>
      </HStack>
    </HStack>
  )
}
