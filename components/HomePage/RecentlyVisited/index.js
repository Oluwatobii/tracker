import { Stack, Heading, Text, Divider, Avatar, HStack } from '@chakra-ui/react'

export default function RecentlyVisited() {
  return (
    <Stack spacing={{ base: '20px' }} p={{ base: '10px' }}>
      <Heading size={{ base: 'md' }}>Recently Visited workspaces</Heading>
      <>
        <HStack
          onClick={() => console.log('recently visited 1')}
          style={{ cursor: 'pointer' }}
        >
          <Avatar size="sm" name="BeneTii" />
          <Text> BeneTii</Text>
        </HStack>
        <Divider />
      </>
      <>
        <HStack
          onClick={() => console.log('recently visited 2')}
          style={{ cursor: 'pointer' }}
        >
          <Avatar size="sm" name="Dunia Collections" />
          <Text> Dunia Collections</Text>
        </HStack>
        <Divider />
      </>
    </Stack>
  )
}
