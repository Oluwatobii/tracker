import { useContext } from 'react'
import { Stack, Box, Heading, Text, useMediaQuery } from '@chakra-ui/react'
import { useQuery } from 'react-query'
import AuthContext from '../../context/AuthProvider'
import { client } from '../../utils/axios'
import Profile from './Profile'
import RecentlyVisited from './RecentlyVisited'
import GetStarted from './GetStarted'
import ActivityFeed from './ActivityFeed'
import { greetingMessage } from '../../utils/helpers'

const WORKSPACE_URL = '/api/workspace'

export default function HomePage() {
  const [isTabletSize] = useMediaQuery(['(min-width: 62em)'])

  const { user } = useContext(AuthContext)

  const getWorkspaces = async () => {
    return await client.get(WORKSPACE_URL)
  }

  const { data, isError, error, isFetched, isLoading } = useQuery(
    'workspaces',
    getWorkspaces
  )

  return (
    <Stack
      padding={{ base: '55px' }}
      direction={['column', 'row']}
      spacing={{ base: '24px' }}
      justify={{ base: 'center' }}
    >
      {isTabletSize ? (
        <Profile
          workspaces={data && data.data ? data.data.workspaces : []}
          isError={isError}
          error={error}
          isFetched={isFetched}
          isLoading={isLoading}
        />
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
        <RecentlyVisited
          workspaces={data && data.data ? data.data.workspaces : []}
          isError={isError}
          error={error}
          isFetched={isFetched}
          isLoading={isLoading}
        />
        <GetStarted
          workspaces={data && data.data ? data.data.workspaces : []}
          isError={isError}
          error={error}
          isFetched={isFetched}
          isLoading={isLoading}
        />
      </Box>
      <ActivityFeed />
    </Stack>
  )
}
