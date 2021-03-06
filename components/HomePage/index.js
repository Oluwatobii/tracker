import { useContext } from 'react'
import { Stack, Box, Heading, Text, useMediaQuery } from '@chakra-ui/react'
import AuthContext from '../../context/AuthProvider'
import Profile from './Profile'
import RecentlyVisited from './RecentlyVisited'
import GetStarted from './GetStarted'
import ActivityFeed from './ActivityFeed'
import { greetingMessage } from '../../utils/helpers'
import TrackerAnimation from '../../assets/animation/TrackerAnimation'

export default function HomePage() {
  const [isTabletSize] = useMediaQuery(['(min-width: 62em)'])
  const { user } = useContext(AuthContext)

  return (
    <Stack
      padding={{ base: '55px' }}
      direction={['column', 'row']}
      spacing={{ base: '24px' }}
      justify={{ base: 'center' }}
    >
      {isTabletSize ? (
        <Box>
          <Profile />
          <TrackerAnimation />
        </Box>
      ) : null}
      <Box padding={{ base: '30px', l: '0px' }} maxW={{ base: '650px' }}>
        <Stack
          spacing={{ base: '20px' }}
          p={{ base: '10px' }}
          mt={{
            base: '-40px'
          }}
        >
          <Heading>{greetingMessage({ name: user.userName })}!</Heading>
          <Text>
            {' '}
            Pick up where you left off, catch up with your team's work
          </Text>
        </Stack>
        <RecentlyVisited />
        <GetStarted />
      </Box>
      <ActivityFeed />
    </Stack>
  )
}
