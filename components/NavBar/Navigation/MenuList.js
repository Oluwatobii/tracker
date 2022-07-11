import {
  Flex,
  Stack,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import WorkspaceMenuList from './WorkspaceMenuList'

export default function MenuList() {
  const linkColor = useColorModeValue('gray.600', 'gray.200')
  const linkHoverColor = useColorModeValue('gray.800', 'white')

  return (
    <Flex
      bg={useColorModeValue('white', 'gray.800')}
      color={useColorModeValue('gray.600', 'white')}
      justifyContent="space-between"
      px={{ base: 10 }}
      borderColor={useColorModeValue('gray.200', 'gray.900')}
    >
      <Stack direction="row" spacing={35}>
        <Popover m={0} trigger={'hover'} placement={'bottom-start'}>
          <PopoverTrigger>
            <Link
              p={2}
              href="/"
              fontSize={'md'}
              fontWeight={700}
              color={linkColor}
              _hover={{
                textDecoration: 'none',
                color: linkHoverColor
              }}
            >
              Home
            </Link>
          </PopoverTrigger>
        </Popover>
        <Popover m={0} trigger={'hover'} placement={'bottom-start'}>
          <PopoverTrigger m={0}>
            <Link
              p={2}
              href="/workspace"
              fontSize={'md'}
              fontWeight={700}
              color={linkColor}
              _hover={{
                textDecoration: 'none',
                color: linkHoverColor
              }}
            >
              Workspaces
              <Icon color={'brand.200'} w={5} h={5} as={ChevronDownIcon} />
            </Link>
          </PopoverTrigger>
          <WorkspaceMenuList />
        </Popover>
        <Popover m={0} trigger={'hover'} placement={'bottom-start'}>
          <PopoverTrigger>
            <Link
              p={2}
              href="/ticket"
              fontSize={'md'}
              fontWeight={700}
              color={linkColor}
              _hover={{
                textDecoration: 'none',
                color: linkHoverColor
              }}
            >
              Current Queue
            </Link>
          </PopoverTrigger>
        </Popover>
        <Popover m={0} trigger={'hover'} placement={'bottom-start'}>
          <PopoverTrigger>
            <Link
              p={2}
              href="/report"
              fontSize={'md'}
              fontWeight={700}
              color={linkColor}
              _hover={{
                textDecoration: 'none',
                color: linkHoverColor
              }}
            >
              Reports
            </Link>
          </PopoverTrigger>
        </Popover>
      </Stack>
    </Flex>
  )
}
