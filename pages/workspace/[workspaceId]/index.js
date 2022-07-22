import {
  Box,
  Stack,
  HStack,
  Select,
  Divider,
  Input,
  Heading,
  Text,
  Button,
  Spinner,
  Center,
  Wrap,
  Badge,
  Link,
  WrapItem,
  AvatarGroup,
  Avatar,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  useDisclosure
} from '@chakra-ui/react'
import { EmailIcon, EditIcon, DeleteIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'
import { Fragment, useContext, useState } from 'react'
import AuthContext from '../../../context/AuthProvider'
import useWorkspaces from '../../../hooks/useWorkspaces'
import useUserRoles from '../../../hooks/useUserRoles'

export default function Projects() {
  const router = useRouter()
  const { user } = useContext(AuthContext)
  const { workspaceId } = router.query
  const { data: workspaceData, isLoading } = useWorkspaces()
  const { data: rolesData } = useUserRoles()
  const workspaces =
    workspaceData && workspaceData.data ? workspaceData.data.workspaces : []
  const currentWorkspace =
    workspaces && workspaces.find(workspace => workspace.id == workspaceId)

  const roles = rolesData && rolesData.data ? rolesData.data.roles : {}
  const { workspaces: userWorkspacesRole = {} } = roles

  const AUTHORIZED_ROLES = ['Admin', 'Owner', 'Workspace Admin']
  const authorized = currentWorkspace
    ? AUTHORIZED_ROLES.includes(userWorkspacesRole[currentWorkspace.uuid])
    : false

  return (
    <Box padding={{ base: '20px', lg: '55px' }}>
      <Stack
        direction={{ base: 'column', md: 'row', lg: 'row' }}
        mt={{ base: '10px', lg: '20px' }}
        mb="50px"
        justify="space-around"
      >
        <Box>
          <Heading as="h3" size="lg">
            {currentWorkspace ? (
              currentWorkspace.name
            ) : (
              <Spinner color={'brand.200'} size={{ base: 'md' }} />
            )}
          </Heading>
          <Text fontSize="md">A List of all projects in this workspace.</Text>
        </Box>
        <Box>
          <Button
            ml="10px"
            colorScheme="purple"
            size={{ base: 'sm', lg: 'md' }}
            onClick={() => router.push(`/workspace/${workspaceId}/admin`)}
          >
            Admin
          </Button>
          {authorized ? (
            <Button
              leftIcon={<EmailIcon />}
              colorScheme="brand"
              variant="solid"
              onClick={() => console.log('Invite Members to workspace')}
              size={{ base: 'sm', lg: 'md' }}
              ml={{ base: '20px' }}
            >
              Invite
            </Button>
          ) : null}
        </Box>
      </Stack>
      <Stack
        direction={{ base: 'column', lg: 'row' }}
        mb="20px"
        justify="space-evenly"
      >
        <HStack>
          <Input
            variant="outline"
            isDisabled={workspaces.length === 0}
            htmlSize={30}
            w={{ base: '150px', md: 'auto', lg: 'auto' }}
            placeholder="Search Project"
            _placeholder={{ opacity: 0.4, color: 'brand' }}
          />
          <Select placeholder="Created By" w={{ base: '150px', lg: '200px' }}>
            <option value="option1"> Option 1</option>
          </Select>
          <Select placeholder="Status" w={{ base: '100px', lg: '150px' }}>
            <option value="notStarted"> Not Started</option>
            <option value="inProgress"> In Progress</option>
            <option value="completed"> Completed</option>
            <option value="canceled"> Canceled</option>
          </Select>
        </HStack>
        <Box>
          <Select w="200px">
            <option value="asc">Sort by Alphabetical (A to Z)</option>
            <option value="desc">Sort by Alphabetical (Z to A)</option>
            <option value="recentlyCreated">Recently Created</option>
            <option value="recentlyUpdated">Recently Updated</option>
          </Select>
        </Box>
      </Stack>
      <Center>
        <Divider width="1000px" />
      </Center>
      <TableContainer mt={{ base: '20px' }}>
        <Table variant="simple">
          <TableCaption>
            List of Projects in{' '}
            {currentWorkspace ? (
              currentWorkspace.name
            ) : (
              <Spinner color={'brand.200'} size={{ base: 'md' }} />
            )}
          </TableCaption>
          <Thead>
            <Tr>
              <Th>Project No</Th>
              <Th>Project</Th>
              <Th>Status</Th>
              <Th>Description</Th>
              <Th>Created At</Th>
              <Th>Updated At</Th>
              <Th>Owner</Th>
              <Th>Team Member(s)</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          {Array.from([1, 2, 3, 4, 5, 6, 7], (project, index) => (
            <Tbody
              key={index}
              onClick={() => console.log(`Go to this workspace: ${index}`)}
              style={{ cursor: 'pointer' }}
            >
              <Tr>
                <Td>PR#1</Td>
                <Td>Tracker</Td>
                <Td>
                  <Badge variant="outline" colorScheme="green">
                    Active
                  </Badge>
                </Td>
                <Td>
                  <Text noOfLines={1}>
                    The quick brown fox
                    <br />
                    jumps over the lazy dog
                  </Text>
                </Td>
                <Td>Monday 16th, May 2021</Td>
                <Td>Monday 19th, May 2021</Td>
                <Td>Oluwatobi A. Bello</Td>
                <Td>
                  <AvatarGroup size="md" max={2}>
                    <Avatar name="Tobi Bello" />
                    <Avatar name="Malik Bello" />
                    <Avatar name="Amir Bello" />
                    <Avatar name="John Doe" />
                    <Avatar name="Bola Bello" />
                  </AvatarGroup>
                </Td>
                <Td>
                  <HStack>
                    <EditIcon
                      onClick={() =>
                        console.log(`Edit this workspace: ${index}`)
                      }
                    />
                    <DeleteIcon
                      onClick={() =>
                        console.log(`Delete this workspace: ${index}`)
                      }
                    />
                  </HStack>
                </Td>
              </Tr>
            </Tbody>
          ))}
        </Table>
      </TableContainer>
    </Box>
  )
}
