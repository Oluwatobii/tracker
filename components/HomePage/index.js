import { Stack, Box, Heading, Text, useMediaQuery } from '@chakra-ui/react'
import Profile from './Profile'
import RecentlyVisited from './RecentlyVisited'
import GetStarted from './GetStarted'
import ActivityFeed from './ActivityFeed'

export default function HomePage() {
  const [isTabletSize] = useMediaQuery(['(min-width: 62em)'])

  return (
    <Stack
      padding={{ base: '55px' }}
      direction={['column', 'row']}
      spacing={{ base: '24px' }}
      justify={{ base: 'center' }}
    >
      {isTabletSize ? <Profile /> : null}
      <Box padding={{ base: '30px', l: '0px' }} maxW={{ base: '650px' }}>
        <Stack
          spacing={{ base: '20px' }}
          p={{ base: '10px' }}
          mt={{
            base: '-40px'
          }}
        >
          <Heading>Good Evening, Oluwatobi Bello!</Heading>
          {/* <Heading>Tracker Doesn't sleep either</Heading> */}
          {/* <Heading>Hey there, night owl!</Heading> */}
          <Text>
            {' '}
            Pick up where you left off, catch up with your team's work
          </Text>
        </Stack>
        <RecentlyVisited />
        <GetStarted />
      </Box>
      <ActivityFeed />
    </Stack>
  )
}

/*
export default function HomePage() {
  const client = useClient()
  const [value, setValue] = useState(false)
  useEffect(() => {
    const getPorojects = async () => {
      try {
        const response = await client('/api/project')
      } catch (error) {
        console.error('Home Page request projets error: ', error)
      }
    }
    getPorojects()
  }, [value])

  return (
    <Button colorScheme="blue" onClick={() => setValue(value => !value)}>
      {' '}
      Get Projects
    </Button>
  )
}
*/
