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
  Divider
} from '@chakra-ui/react'
import { ChevronRightIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'

import CreateWorkspace from '../../../Forms/CreateWorkspace'

export default function WorkspaceMenuList() {
  const router = useRouter()
  const popoverContentBgColor = useColorModeValue('white', 'gray.800')
  const { isOpen, onOpen, onClose } = useDisclosure()

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
        <Link
          href="#workspace#1"
          role={'group'}
          display={'block'}
          p={2}
          rounded={'md'}
          _hover={{ bg: useColorModeValue('brand.400', 'gray.900') }}
        >
          <HStack direction={'row'} align={'center'}>
            <Avatar size="sm" name="Workspace One" />
            <Box>
              <Text
                transition={'all .3s ease'}
                _groupHover={{ color: 'brand.200' }}
                fontWeight={700}
              >
                Workspace #1
              </Text>
              <Text fontSize={'md'}>Workspaces #1 Label</Text>
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
              <Icon color={'brand.200'} w={5} h={5} as={ChevronRightIcon} />
            </Flex>
          </HStack>
        </Link>
        <Link
          href="#workspace#2"
          role={'group'}
          display={'block'}
          p={2}
          rounded={'md'}
          _hover={{ bg: useColorModeValue('brand.400', 'gray.900') }}
        >
          <HStack direction={'row'} align={'center'}>
            <Avatar size="sm" name="Workspace Two" />
            <Box>
              <Text
                transition={'all .3s ease'}
                _groupHover={{ color: 'brand.200' }}
                fontWeight={700}
              >
                Workspaces #2
              </Text>
              <Text fontSize={'md'}>Workspace #2 Label</Text>
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
              <Icon color={'brand.200'} w={5} h={5} as={ChevronRightIcon} />
            </Flex>
          </HStack>
        </Link>
      </Stack>
      <Divider />
      <HStack
        onClick={() => router.push('/workspaces')}
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
