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
import { useId } from 'react'
import useAuth from '../../../hooks/useAuth'
import CreateWorkspace from '../../Forms/CreateWorkspace'
import useWorkspaces from '../../../hooks/useWorkspaces'
import useUserRoles from '../../../hooks/useUserRoles'

export default function Profile() {
  const id = useId()
  const router = useRouter()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { user } = useAuth()
  const { data: workspaceData, isLoading } = useWorkspaces()
  const { data: rolesData } = useUserRoles()
  const workspaces =
    workspaceData && workspaceData.data ? workspaceData.data.workspaces : []
  const roles = rolesData && rolesData.data ? rolesData.data.roles : {}
  const { workspaces: userWorkspacesRole } = roles
  const AUTHORIZED_ROLES = ['Admin', 'Owner', 'Workspace Admin']
  const authorized = workspaces.length
    ? Object.values(userWorkspacesRole || {}).some(role =>
        AUTHORIZED_ROLES.includes(role)
      )
    : false

  const PROFILE_MENU_LIST = [
    {
      key: `${id}-workspace`,
      name: 'Workspaces',
      url: '/workspace'
    },
    {
      key: `${id}-ticket`,
      name: 'Current Queue',
      url: '/ticket'
    },
    {
      key: `${id}-project`,
      name: 'Projects',
      url: '/project'
    },
    {
      key: `${id}-report`,
      name: 'Reports',
      url: '/report'
    }
  ]

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
              {PROFILE_MENU_LIST.map(menu => (
                <HStack
                  key={menu.key}
                  onClick={() => router.push(menu.url)}
                  style={{ cursor: 'pointer' }}
                  spacing={{ base: '30px' }}
                  mb={{ base: '10px' }}
                >
                  <Text fontSize={{ base: 'xs' }}>{menu.name}</Text>
                  <Spacer />
                  <Flex color={'brand.200'} alignItems={{ base: 'flex-end' }}>
                    <ChevronRightIcon />
                  </Flex>
                </HStack>
              ))}
            </Box>
          </Stack>
        </Box>
      </Center>
    </Box>
  )
}
