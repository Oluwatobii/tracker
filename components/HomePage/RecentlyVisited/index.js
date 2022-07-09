import {
  Stack,
  Heading,
  Text,
  Divider,
  Avatar,
  HStack,
  Spinner,
  Center,
  Box
} from '@chakra-ui/react'
import { useQuery } from 'react-query'
import { client } from '../../../utils/axios'
import useWorkspaces from '../../../hooks/useWorkspaces'

const WORKSPACE_RECENTLY_VISITED_URL =
  '/api/workspace/recentlyVisitedWorkspaces'

export default function RecentlyVisited() {
  const { data: workspacesData } = useWorkspaces()
  const workspaces =
    workspacesData && workspacesData.data ? workspacesData.data.workspaces : []

  const getRecentlyVisitedWorkspaces = async () => {
    return await client.get(WORKSPACE_RECENTLY_VISITED_URL)
  }
  const { data, isLoading } = useQuery(
    'recentlyVisitedWorkspaces',
    getRecentlyVisitedWorkspaces
  )
  const recentlyVisited = (data && data.data && data.data.recentlyVisited) || []
  const filtered = workspaces.filter(workspace =>
    recentlyVisited.includes(workspace.uuid)
  )

  return (
    <Stack spacing={{ base: '20px' }} p={{ base: '10px' }}>
      <Divider />
      <Heading size={{ base: 'md' }}>Recently Visited workspaces</Heading>
      {isLoading ? (
        <Center>
          <Spinner color={'brand.200'} size={{ base: 'md' }} />
        </Center>
      ) : filtered.length ? (
        <>
          {' '}
          {filtered.map(workspace => (
            <Box key={workspace.uuid}>
              <HStack
                onClick={() => console.log('recently visited 1')}
                style={{ cursor: 'pointer' }}
              >
                <Avatar size="sm" name={workspace.name} />
                <Text> {workspace.name}</Text>
              </HStack>
              <Divider />
            </Box>
          ))}
        </>
      ) : (
        <>
          <HStack>
            <Text as="i" fontSize={{ base: 'md' }} color="grey">
              No recent workspace visited
            </Text>
          </HStack>
          <Divider />
        </>
      )}
    </Stack>
  )
}
