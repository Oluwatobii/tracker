import { Flex, Box, Center, Heading, Text, Spacer } from '@chakra-ui/react'

export default function Navigation({ user }) {
  return (
    <Flex minWidth="max-content" alignItems="center">
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
