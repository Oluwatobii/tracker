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
  Flex
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import useAuth from '../../../hooks/useAuth'

export default function Profile({ workspaces }) {
  const { user } = useAuth()

  console.log({ profile: workspaces })

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
            <HStack mt={{ base: '1.5rem !important' }}>
              <AvatarGroup size={{ base: 'md' }} max={2}>
                <Avatar name="Workspace One" />
                <Avatar name="Workspace Two" />
              </AvatarGroup>
              <Button
                leftIcon={<EmailIcon />}
                colorScheme="brand"
                variant="solid"
              >
                Invite
              </Button>
            </HStack>
            <Box p={{ base: '3px' }}>
              <HStack
                onClick={() => console.log('workspaces')}
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
                onClick={() => console.log('current queue')}
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
                onClick={() => console.log('reports')}
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
