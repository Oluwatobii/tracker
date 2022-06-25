import { Stack, Box, Heading, Text, Avatar, HStack } from '@chakra-ui/react'

export default function ActivityFeed() {
  return (
    <Box padding={{ base: '25px', l: '0px' }} maxW={{ base: '650px' }}>
      <Stack mt={{ base: '45px', l: '50px' }} mb={{ base: '15px' }}>
        <Heading size={{ base: 'md' }}>Activity Feed</Heading>
      </Stack>
      <Stack>
        <Box mb={{ base: '10px' }}>
          <Text as="b" fontSize="15px" color="grey">
            June 24, 2022
          </Text>
          <HStack mb={{ base: '5px' }}>
            <Avatar size="sm" name="Workspace Two " />
            <Text fontSize="15px" color="grey">
              <b> Oluwatobi Bello </b> Changed the status of Ticket{' '}
              <b>CDE-10</b> to <b>Code Review</b>
            </Text>
          </HStack>
          <HStack>
            <Avatar size="sm" name="Workspace One " />
            <Text fontSize="15px" color="grey">
              <b>Bola Aranseola </b>Created a new Ticket <b>CDE-17</b>
            </Text>
          </HStack>
        </Box>
        <Box mb={{ base: '10px' }}>
          <Text as="b" fontSize="15px" color="grey">
            June 19, 2022
          </Text>
          <HStack>
            <Avatar size="sm" name="Workspace One " />
            <Text fontSize="15px" color="grey">
              <b>John Doe</b> Edited Ticket <b>CDE-9</b>
            </Text>
          </HStack>
        </Box>
      </Stack>
    </Box>
  )
}
