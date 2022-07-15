import {
  Box,
  Flex,
  Input,
  Avatar,
  Text,
  Button,
  Stack,
  Icon,
  Link,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  HStack,
  Divider,
  Heading
} from '@chakra-ui/react'
import { ChevronRightIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'
import useGetFetchQuery from '../../../../hooks/useGetFetchQuery'
import useWorkspaces from '../../../../hooks/useWorkspaces'
import CreateWorkspace from '../../../Forms/CreateWorkspace'
import useGoToWorkspace from '../../../../hooks/useGoToWorkspace'

export default function WorkspaceMenuList() {
  const { data } = useWorkspaces()
  const recentlyVisitedData = useGetFetchQuery('recentlyVisitedWorkspaces')
  const popoverContentBgColor = useColorModeValue('white', 'gray.800')
  const popoverContentHoverColor = useColorModeValue('brand.400', 'gray.900')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const router = useRouter()
  const { handleGoToWorkspace } = useGoToWorkspace()

  const workspaces = data && data.data ? data.data.workspaces : []
  const recentlyVisited =
    (recentlyVisitedData &&
      recentlyVisitedData.data &&
      recentlyVisitedData.data.recentlyVisited) ||
    []
  const recentlyVisitedWorkspaces = workspaces.filter(workspace =>
    recentlyVisited.includes(workspace.uuid)
  )
  const moreWorkspaces = workspaces.filter(
    workspace => !recentlyVisited.includes(workspace.uuid)
  )

  return (
    <PopoverContent
      border={0}
      boxShadow={'xl'}
      bg={popoverContentBgColor}
      p={4}
      rounded={'xl'}
      minW={'sm'}
      m={'0  !important'}
    >
      <Stack minH={{ base: 'lg' }}>
        <HStack>
          <Input
            htmlSize={20}
            width="auto"
            placeholder="Search Workspace"
            _placeholder={{ opacity: 0.4, color: 'brand' }}
          />
          <Button onClick={onOpen} colorScheme="brand" size="md">
            Create Workspace
          </Button>
          <CreateWorkspace isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
        </HStack>
        <Stack>
          <Heading as="h5" size="xs" color="grey">
            {' '}
            Recently visited
          </Heading>
          {recentlyVisitedWorkspaces.length ? (
            <>
              {recentlyVisitedWorkspaces.map(workspace => (
                <Box
                  key={workspace.uuid}
                  onClick={() =>
                    handleGoToWorkspace({
                      id: workspace.id,
                      uuid: workspace.uuid
                    })
                  }
                >
                  <Link
                    role={'group'}
                    display={'block'}
                    p={2}
                    rounded={'md'}
                    _hover={{ popoverContentHoverColor }}
                  >
                    <HStack direction={'row'} align={'center'}>
                      <Avatar size="sm" name={workspace.name} />
                      <Box>
                        <Text
                          transition={'all .3s ease'}
                          _groupHover={{ color: 'brand.200' }}
                          fontWeight={700}
                        >
                          {workspace.name}
                        </Text>
                        {workspace.additionalData &&
                        workspace.additionalData.description ? (
                          <Text as="i" fontSize={'md'} noOfLines={1}>
                            {workspace.additionalData.description}
                          </Text>
                        ) : (
                          <Text as="i" fontSize={{ base: 'sm' }} color="grey">
                            No description
                          </Text>
                        )}
                      </Box>
                      <Flex
                        transition={'all .3s ease'}
                        transform={'translateX(-10px)'}
                        opacity={0}
                        _groupHover={{
                          opacity: '100%',
                          transform: 'translateX(0)'
                        }}
                        justify={'flex-end'}
                        align={'center'}
                        flex={1}
                      >
                        <Icon
                          color={'brand.200'}
                          w={5}
                          h={5}
                          as={ChevronRightIcon}
                        />
                      </Flex>
                    </HStack>
                  </Link>
                </Box>
              ))}
            </>
          ) : (
            <HStack>
              <Text as="i" fontSize={{ base: 'md' }} color="grey">
                No recent workspace visited
              </Text>
            </HStack>
          )}
        </Stack>
        <Stack>
          <Heading as="h5" size="xs" color="grey">
            {' '}
            More Workspaces
          </Heading>
          {moreWorkspaces.length ? (
            <>
              {moreWorkspaces.map(workspace => (
                <Box
                  key={workspace.uuid}
                  onClick={() =>
                    handleGoToWorkspace({
                      id: workspace.id,
                      uuid: workspace.uuid
                    })
                  }
                >
                  <Link
                    role={'group'}
                    display={'block'}
                    p={2}
                    rounded={'md'}
                    _hover={{ popoverContentHoverColor }}
                  >
                    <HStack direction={'row'} align={'center'}>
                      <Avatar size="sm" name={workspace.name} />
                      <Box>
                        <Text
                          transition={'all .3s ease'}
                          _groupHover={{ color: 'brand.200' }}
                          fontWeight={700}
                        >
                          {workspace.name}
                        </Text>
                        {workspace.additionalData &&
                        workspace.additionalData.description ? (
                          <Text as="i" fontSize={'md'} noOfLines={1}>
                            {workspace.additionalData.description}
                          </Text>
                        ) : (
                          <Text as="i" fontSize={{ base: 'sm' }} color="grey">
                            No description
                          </Text>
                        )}
                      </Box>
                      <Flex
                        transition={'all .3s ease'}
                        transform={'translateX(-10px)'}
                        opacity={0}
                        _groupHover={{
                          opacity: '100%',
                          transform: 'translateX(0)'
                        }}
                        justify={'flex-end'}
                        align={'center'}
                        flex={1}
                      >
                        <Icon
                          color={'brand.200'}
                          w={5}
                          h={5}
                          as={ChevronRightIcon}
                        />
                      </Flex>
                    </HStack>
                  </Link>
                </Box>
              ))}
            </>
          ) : (
            <HStack>
              <Text as="i" fontSize={{ base: 'md' }} color="grey">
                No more workspaces
              </Text>
            </HStack>
          )}
        </Stack>
      </Stack>
      <Divider />
      <HStack
        onClick={() => router.push('/workspace')}
        style={{ cursor: 'pointer' }}
        color={'brand.200'}
        mt={{ base: '10px' }}
      >
        <Text fontSize={{ base: 'xs' }}>View all Workspaces</Text>
        <ArrowForwardIcon />
      </HStack>
    </PopoverContent>
  )
}
