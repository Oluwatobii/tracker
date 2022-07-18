import {
  Box,
  Avatar,
  Stack,
  HStack,
  Select,
  Divider,
  Input,
  Heading,
  Text,
  Button,
  Center,
  Wrap,
  WrapItem,
  useDisclosure
} from '@chakra-ui/react'
import { useContext, useState } from 'react'
import AuthContext from '../../context/AuthProvider'
import useWorkspaces from '../../hooks/useWorkspaces'
import CreateWorkspace from '../../components/Forms/CreateWorkspace'
import useGoToWorkspace from '../../hooks/useGoToWorkspace'
import { useWorkspaceUsers } from '../../hooks/useWorkspaces'

export default function Workspaces() {
  const { user } = useContext(AuthContext)
  const { handleGoToWorkspace } = useGoToWorkspace()
  const { data } = useWorkspaces()
  const { data: workspaceUsers } = useWorkspaceUsers()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [searchTerm, setSearchTerm] = useState('')
  const [sortValue, setSortValue] = useState('asc')
  const [owner, setOwner] = useState('')
  const workspaces = data && data.data ? data.data.workspaces : []
  const _workspaceUsers =
    workspaceUsers && workspaceUsers.data ? workspaceUsers.data.allUsers : []
  const _workspaceUsersMapped = _workspaceUsers.map(user => ({
    uuid: user.uuid,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName
  }))

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
            {user.userName.split(' ')[0]}'s Workspaces
          </Heading>
          <Text fontSize="md">A directory of all your workspaces.</Text>
        </Box>
        <Box>
          <Button
            onClick={onOpen}
            colorScheme="brand"
            size={{ base: 'sm', lg: 'md' }}
          >
            Create Workspaces
          </Button>
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
            placeholder="Search Workspace"
            _placeholder={{ opacity: 0.4, color: 'brand' }}
            onChange={event => {
              setSearchTerm(event.target.value)
            }}
          />
          <Select
            placeholder="Created By"
            isDisabled={workspaces.length === 0}
            w={{ base: '150px', lg: '220px' }}
            onChange={event => {
              setOwner(event.target.value)
            }}
          >
            {_workspaceUsersMapped
              .filter(user =>
                workspaces.some(workspace => workspace.owner === user.uuid)
              )
              .map(owner => (
                <option key={owner.uuid} value={owner.uuid}>
                  {owner.firstName} {owner.lastName}
                </option>
              ))}
          </Select>
        </HStack>
        <Box>
          <Select
            w="200px"
            isDisabled={workspaces.length === 0}
            onChange={event => {
              setSortValue(event.target.value)
            }}
          >
            <option value="asc">Sort by A to Z</option>
            <option value="desc">Sort by Z to A</option>
            <option value="recentlyCreated">Recently Created</option>
            <option value="recentlyUpdated">Recently Updated</option>
          </Select>
        </Box>
      </Stack>
      <Center>
        <Divider width="1000px" />
      </Center>
      <Wrap
        mt="30px"
        spacing={{ base: 5, md: 5, lg: 10 }}
        justify="space-evenly"
      >
        {workspaces.length ? (
          <>
            {workspaces
              .filter(workspace => {
                const nameMatch = workspace.name
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())

                if (searchTerm === '') return workspace
                if (nameMatch) return workspace
              })
              .filter(workspace => {
                if (owner === '') return workspace

                const ownerMatch = workspace.owner === owner
                if (ownerMatch) return workspace
              })
              .sort((a, b) => {
                if (sortValue === 'asc') return a.name.localeCompare(b.name)
                if (sortValue === 'desc') return b.name.localeCompare(a.name)
                if (sortValue === 'recentlyCreated')
                  return new Date(b.createdAt) - new Date(a.createdAt)
                if (sortValue === 'recentlyUpdated')
                  return new Date(b.updatedAt) - new Date(a.updatedAt)
              })
              .map(workspace => (
                <WrapItem key={workspace.uuid}>
                  <Center
                    p={5}
                    shadow={{ base: 'md' }}
                    borderWidth={{ base: '1px' }}
                    h={{ base: '200px' }}
                    w={{ base: '350px' }}
                  >
                    <Box>
                      <HStack
                        mb="10px"
                        style={{ cursor: 'pointer' }}
                        onClick={() =>
                          handleGoToWorkspace({
                            id: workspace.id,
                            uuid: workspace.uuid
                          })
                        }
                      >
                        <Box>
                          <Heading as="h3" size="lg">
                            {workspace.name}
                          </Heading>
                          {workspace.additionalData &&
                          workspace.additionalData.description ? (
                            <Text fontSize={'md'} noOfLines={1}>
                              {workspace.additionalData.description}
                            </Text>
                          ) : (
                            <Text
                              noOfLines={2}
                              as="i"
                              fontSize={{ base: 'sm' }}
                              color="grey"
                            >
                              No description
                            </Text>
                          )}
                        </Box>
                        <Box>
                          <Avatar size="md" name={workspace.name} />
                        </Box>
                      </HStack>
                      <Divider />
                      <HStack spacing={4} mt="10px">
                        <Text
                          onClick={() => console.log('Edit Workspace')}
                          style={{ cursor: 'pointer' }}
                          fontSize={{ base: 'md' }}
                          color={'brand.200'}
                        >
                          Edit
                        </Text>
                        <Text
                          onClick={() => console.log('Archive Workspace')}
                          style={{ cursor: 'pointer' }}
                          fontSize={{ base: 'md' }}
                          color={'grey'}
                        >
                          Archive
                        </Text>
                        <Text
                          onClick={() => console.log('Delete Workspace')}
                          style={{ cursor: 'pointer' }}
                          fontSize={{ base: 'md' }}
                          color={'red.200'}
                        >
                          Delete
                        </Text>
                      </HStack>
                    </Box>
                  </Center>
                </WrapItem>
              ))}
          </>
        ) : (
          <HStack>
            <Heading as="i" fontSize={{ base: 'lg' }} color="grey">
              No workspace?
            </Heading>
            <Heading
              onClick={onOpen}
              style={{ cursor: 'pointer' }}
              fontSize={{ base: 'lg' }}
              color={'brand.200'}
            >
              Create
            </Heading>
          </HStack>
        )}
      </Wrap>
      <CreateWorkspace isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </Box>
  )
}
