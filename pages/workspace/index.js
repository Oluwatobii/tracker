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
import useWorkspaces from '../../hooks/useWorkspaces'
import CreateWorkspace from '../../components/Forms/CreateWorkspace'
import { useRouter } from 'next/router'
import useGoToWorkspace from '../../hooks/useGoToWorkspace'

export default function Workspaces() {
  const router = useRouter()
  const { handleGoToWorkspace } = useGoToWorkspace()
  const { data } = useWorkspaces()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const workspaces = data && data.data ? data.data.workspaces : []

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
            Oluwatobi's Workspaces
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
            htmlSize={30}
            w={{ base: '150px', md: 'auto', lg: 'auto' }}
            placeholder="Search Workspace"
            _placeholder={{ opacity: 0.4, color: 'brand' }}
          />
          <Select placeholder=" Created By" w={{ base: '150px', lg: '150px' }}>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </HStack>
        <Box>
          <Select placeholder="Sort by A to Z" w="200px">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
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
            {workspaces.map(workspace => (
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
