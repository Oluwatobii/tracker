import { Flex, Box, Center, Heading, Text, Spacer } from '@chakra-ui/react'
import TrackerLogo from '../../assets/svgs/TrackerLogo'

export default function Navigation({ user }) {
  return (
    <Flex minWidth="max-content" alignItems="center">
      {/* <TrackerLogo /> */}
      <Box p="4">
        <Heading size="md">Tracker</Heading>
      </Box>
      <Spacer />
      {user ? (
        <Center>
          <Text>Menu List</Text>
        </Center>
      ) : null}
    </Flex>
  )
}
