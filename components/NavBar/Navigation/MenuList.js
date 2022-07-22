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
import { useId } from 'react'

export default function MenuList() {
  const id = useId()
  const linkColor = useColorModeValue('gray.600', 'gray.200')
  const linkHoverColor = useColorModeValue('gray.800', 'white')

  const MENU_LIST = [
    {
      key: `${id}-home`,
      name: 'Home',
      url: '/'
    },
    {
      key: `${id}-workspace`,
      name: 'Workspaces',
      url: '/workspace',
      icon: <Icon color={'brand.200'} w={5} h={5} as={ChevronDownIcon} />,
      children: <WorkspaceMenuList />
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
    <Flex
      bg={useColorModeValue('white', 'gray.800')}
      color={useColorModeValue('gray.600', 'white')}
      justifyContent="space-between"
      px={{ base: 10 }}
      borderColor={useColorModeValue('gray.200', 'gray.900')}
    >
      <Stack direction="row" spacing={35}>
        {MENU_LIST.map(menu => (
          <Popover
            key={menu.key}
            m={0}
            trigger={'hover'}
            placement={'bottom-start'}
          >
            <PopoverTrigger>
              <Link
                p={2}
                href={menu.url}
                fontSize={'md'}
                fontWeight={700}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor
                }}
              >
                {menu.name}
                {menu.icon ? menu.icon : null}
              </Link>
            </PopoverTrigger>
            {menu.children ? menu.children : null}
          </Popover>
        ))}
      </Stack>
    </Flex>
  )
}
