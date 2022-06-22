import {
  Box,
  Flex,
  Center,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure
} from '@chakra-ui/react'
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon
} from '@chakra-ui/icons'

export default function MenuList() {
  const linkColor = useColorModeValue('gray.600', 'gray.200')
  const linkHoverColor = useColorModeValue('gray.800', 'white')
  const popoverContentBgColor = useColorModeValue('white', 'gray.800')
  return (
    <Flex
      bg={useColorModeValue('white', 'gray.800')}
      color={useColorModeValue('gray.600', 'white')}
      justifyContent="space-between"
      px={{ base: 10 }}
      borderColor={useColorModeValue('gray.200', 'gray.900')}
    >
      <Stack direction="row" spacing={35}>
        <Popover trigger={'hover'} placement={'bottom-start'}>
          <PopoverTrigger>
            <Link
              p={2}
              href="#"
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
        <Popover trigger={'hover'} placement={'bottom-start'}>
          <PopoverTrigger>
            <Link
              p={2}
              href="#"
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

          <PopoverContent
            border={0}
            boxShadow={'xl'}
            bg={popoverContentBgColor}
            p={4}
            rounded={'xl'}
            minW={'sm'}
          >
            <Stack>
              <Link
                href="#workspace#1"
                role={'group'}
                display={'block'}
                p={2}
                rounded={'md'}
                _hover={{ bg: useColorModeValue('brand.400', 'gray.900') }}
              >
                <Stack direction={'row'} align={'center'}>
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
                    <Icon
                      color={'brand.200'}
                      w={5}
                      h={5}
                      as={ChevronRightIcon}
                    />
                  </Flex>
                </Stack>
              </Link>
              <Link
                href="#workspace#2"
                role={'group'}
                display={'block'}
                p={2}
                rounded={'md'}
                _hover={{ bg: useColorModeValue('brand.400', 'gray.900') }}
              >
                <Stack direction={'row'} align={'center'}>
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
                    <Icon
                      color={'brand.200'}
                      w={5}
                      h={5}
                      as={ChevronRightIcon}
                    />
                  </Flex>
                </Stack>
              </Link>
            </Stack>
          </PopoverContent>
        </Popover>
        <Popover trigger={'hover'} placement={'bottom-start'}>
          <PopoverTrigger>
            <Link
              p={2}
              href="#"
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
        <Popover trigger={'hover'} placement={'bottom-start'}>
          <PopoverTrigger>
            <Link
              p={2}
              href="#"
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

const NAV_ITEMS = [
  {
    label: 'Inspiration',
    children: [
      {
        label: 'Explore Design Work',
        subLabel: 'Trending Design to inspire you',
        href: '#'
      },
      {
        label: 'New & Noteworthy',
        subLabel: 'Up-and-coming Designers',
        href: '#'
      }
    ]
  },
  {
    label: 'Find Work',
    children: [
      {
        label: 'Job Board',
        subLabel: 'Find your dream design job',
        href: '#'
      },
      {
        label: 'Freelance Projects',
        subLabel: 'An exclusive list for contract work',
        href: '#'
      }
    ]
  },
  {
    label: 'Learn Design',
    href: '#'
  },
  {
    label: 'Hire Designers',
    href: '#'
  }
]
