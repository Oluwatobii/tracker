import {
  Stack,
  Box,
  Heading,
  Text,
  Wrap,
  WrapItem,
  Center,
  HStack
} from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'

export default function GetStarted() {
  return (
    <Stack spacing={{ base: '20px' }} p={{ base: '10px' }}>
      <Heading size={{ base: 'md' }}>Get Started with Tracker</Heading>
      <Wrap spacing={{ base: '20px' }}>
        <WrapItem>
          <Center>
            <Box
              p={5}
              shadow={{ base: 'md' }}
              borderWidth={{ base: '1px' }}
              maxH={{ base: '250px' }}
              maxW={{ base: '250px' }}
            >
              <Stack>
                <Heading size={{ base: 'sm' }}>
                  Start with something new{' '}
                </Heading>
                <Text fontSize={{ base: 'xs' }}>
                  Create a new workspace and invite users to colaborate on
                  projects.
                </Text>
                <HStack
                  onClick={() => console.log('create workspace')}
                  style={{ cursor: 'pointer' }}
                  color={'brand.200'}
                >
                  <Text fontSize={{ base: 'xs' }}>Create Workspace</Text>
                  <ArrowForwardIcon />
                </HStack>
              </Stack>
            </Box>
          </Center>
        </WrapItem>
        <WrapItem>
          <Center>
            <Box
              p={5}
              shadow={{ base: 'md' }}
              borderWidth={{ base: '1px' }}
              maxH={{ base: '250px' }}
              maxW={{ base: '250px' }}
            >
              <Stack>
                <Heading size={{ base: 'sm' }}>Create Project </Heading>
                <Text fontSize={{ base: 'xs' }}>
                  Create a new Project in an existing workspace.
                </Text>
                <HStack
                  onClick={() => console.log('create project')}
                  style={{ cursor: 'pointer' }}
                  color={'brand.200'}
                >
                  <Text fontSize={{ base: 'xs' }}>Create Project</Text>
                  <ArrowForwardIcon />
                </HStack>
              </Stack>
            </Box>
          </Center>
        </WrapItem>
        <WrapItem>
          <Center>
            <Box
              p={5}
              shadow={{ base: 'md' }}
              borderWidth={{ base: '1px' }}
              maxH={{ base: '250px' }}
              maxW={{ base: '250px' }}
            >
              <Stack>
                <Heading size={{ base: 'sm' }}>Shared with me </Heading>
                <Text fontSize={{ base: 'xs' }}>
                  View all current tasks that are available to you.
                </Text>
                <HStack
                  onClick={() => console.log('explore')}
                  style={{ cursor: 'pointer' }}
                  color={'brand.200'}
                >
                  <Text fontSize={{ base: 'xs' }}>Explore</Text>
                  <ArrowForwardIcon />
                </HStack>
              </Stack>
            </Box>
          </Center>
        </WrapItem>
        <WrapItem>
          <Center>
            <Box
              p={5}
              shadow={{ base: 'md' }}
              borderWidth={{ base: '1px' }}
              maxH={{ base: '250px' }}
              maxW={{ base: '250px' }}
            >
              <Stack>
                <Heading size={{ base: 'sm' }}>
                  Work smarter with Tracker{' '}
                </Heading>
                <Text fontSize={{ base: 'xs' }}>
                  Learn how Tracker can help achieve milestones in your Project.
                </Text>
                <HStack
                  onClick={() => console.log('learn')}
                  style={{ cursor: 'pointer' }}
                  color={'brand.200'}
                >
                  <Text fontSize={{ base: 'xs' }}>Learn</Text>
                  <ArrowForwardIcon />
                </HStack>
              </Stack>
            </Box>
          </Center>
        </WrapItem>
      </Wrap>
    </Stack>
  )
}
