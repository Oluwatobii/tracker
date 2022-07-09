import {
  Stack,
  Box,
  Heading,
  Text,
  Button,
  Center,
  AvatarGroup,
  Avatar,
  HStack,
  Spacer,
  Flex,
  Spinner,
  useDisclosure
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import useAuth from '../../../hooks/useAuth'
import CreateWorkspace from '../../Forms/CreateWorkspace'

export default function Profile({ workspaces, isLoading }) {
  const router = useRouter()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { user } = useAuth()

  const roles = Cookies.get('userRoles')
  const { workspaces: userWorkspacesRole } = roles ? JSON.parse(roles) : {}
  const AUTHORIZED_ROLES = ['Admin', 'Owner', 'Workspace Admin']
  const authorized = workspaces.length
    ? Object.values(userWorkspacesRole || {}).some(role =>
        AUTHORIZED_ROLES.includes(role)
      )
    : false

  return (
    <Box
      padding={{ base: '45px', l: '0px' }}
      maxH={{ base: '750px' }}
      maxW={{ base: '750px' }}
      mt={{
        base: 10,
        xl: 20
      }}
    >
      <Center>
        <Box
          h={{ base: '300px' }}
          w={{ base: '300px' }}
          p={{ base: '15px' }}
          shadow={{ base: 'md' }}
          borderWidth={{ base: '1px' }}
        >
          <Stack mt={{ base: '35px' }} p={{ base: '3px' }}>
            <Heading mt={{ base: '10px' }} size={{ base: 'sm' }}>
              {user.userName}
            </Heading>
            {isLoading ? (
              <Center>
                <Spinner color={'brand.200'} size={{ base: 'md' }} />
              </Center>
            ) : workspaces.length ? (
              <HStack mt={{ base: '1.5rem !important' }}>
                <AvatarGroup size={{ base: 'md' }} max={2}>
                  {workspaces.map(workspace => (
                    <Avatar key={workspace.uuid} name={workspace.name} />
                  ))}
                </AvatarGroup>
                {authorized ? (
                  <Button
                    leftIcon={<EmailIcon />}
                    colorScheme="brand"
                    variant="solid"
                  >
                    Invite
                  </Button>
                ) : null}
              </HStack>
            ) : (
              <>
                <HStack>
                  <Text as="i" fontSize={{ base: 'xs' }} color="grey">
                    No workspace?
                  </Text>
                  <Text
                    onClick={onOpen}
                    style={{ cursor: 'pointer' }}
                    fontSize={{ base: 'xs' }}
                    color={'brand.200'}
                  >
                    Create
                  </Text>
                </HStack>
                <CreateWorkspace
                  isOpen={isOpen}
                  onOpen={onOpen}
                  onClose={onClose}
                />
              </>
            )}
            <Box p={{ base: '3px' }}>
              <HStack
                onClick={() => router.push('/workspaces')}
                style={{ cursor: 'pointer' }}
                spacing={{ base: '30px' }}
                mb={{ base: '10px' }}
              >
                <Text fontSize={{ base: 'xs' }}>Workspaces</Text>
                <Spacer />
                <Flex color={'brand.200'} alignItems={{ base: 'flex-end' }}>
                  <ChevronRightIcon />
                </Flex>
              </HStack>
              <HStack
                onClick={() => router.push('/tickets')}
                style={{ cursor: 'pointer' }}
                spacing={{ base: '30px' }}
                mb={{ base: '10px' }}
              >
                <Text fontSize={{ base: 'xs' }}>Current Queue</Text>
                <Spacer />
                <Flex color={'brand.200'} alignItems={{ base: 'flex-end' }}>
                  <ChevronRightIcon />
                </Flex>
              </HStack>
              <HStack
                onClick={() => router.push('/reports')}
                style={{ cursor: 'pointer' }}
                spacing={{ base: '30px' }}
                mb={{ base: '10px' }}
              >
                <Text fontSize={{ base: 'xs' }}>Reports</Text>
                <Spacer />
                <Flex color={'brand.200'} alignItems={{ base: 'flex-end' }}>
                  <ChevronRightIcon />
                </Flex>
              </HStack>
            </Box>
          </Stack>
        </Box>
      </Center>
    </Box>
  )
}
