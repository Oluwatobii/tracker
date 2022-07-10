import {
  Box,
  Avatar,
  Stack,
  HStack,
  Select,
  Divider,
  Input,
  Heading,
  Text,
  Button,
  Center,
  Wrap,
  WrapItem
} from '@chakra-ui/react'

export default function Workspaces() {
  return (
    <Box padding={{ base: '20px', lg: '55px' }}>
      <Stack
        direction={{ base: 'column', md: 'row', lg: 'row' }}
        mt={{ base: '10px', lg: '20px' }}
        mb="50px"
        justify="space-around"
      >
        <Box>
          <Heading as="h3" size="lg">
            Oluwatobi's Workspaces
          </Heading>
          <Text fontSize="md">A directory of all your workspaces.</Text>
        </Box>
        <Box>
          <Button colorScheme="brand" size={{ base: 'sm', lg: 'md' }}>
            Create Workspaces
          </Button>
        </Box>
      </Stack>
      <Stack
        direction={{ base: 'column', lg: 'row' }}
        mb="20px"
        justify="space-evenly"
      >
        <HStack>
          <Input
            variant="outline"
            htmlSize={30}
            w={{ base: '150px', md: 'auto', lg: 'auto' }}
            placeholder="Search Workspace"
            _placeholder={{ opacity: 0.4, color: 'brand' }}
          />
          <Select placeholder=" Created By" w={{ base: '150px', lg: '150px' }}>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </HStack>
        <Box>
          <Select placeholder="Sort by A to Z" w="200px">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </Box>
      </Stack>
      <Center>
        <Divider width="1000px" />
      </Center>
      <Wrap
        mt="30px"
        spacing={{ base: 5, md: 5, lg: 10 }}
        justify="space-evenly"
      >
        {Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (workspace, i) => (
          <WrapItem key={i}>
            <Center
              p={5}
              shadow={{ base: 'md' }}
              borderWidth={{ base: '1px' }}
              maxH={{ base: '350px' }}
              maxW={{ base: '350px' }}
            >
              <Box>
                <HStack
                  mb="10px"
                  style={{ cursor: 'pointer' }}
                  onClick={() => console.log('Go To Workspace')}
                >
                  <Box>
                    <Heading as="h3" size="lg">
                      BeneTii
                    </Heading>
                    <Text fontSize="md">
                      A description of workspace BeneTii
                    </Text>
                  </Box>
                  <Box>
                    <Avatar size="lg" name="BeneTii" />
                  </Box>
                </HStack>
                <Divider />
                <HStack spacing={4} mt="10px">
                  <Text
                    onClick={() => console.log('Edit Workspace')}
                    style={{ cursor: 'pointer' }}
                    fontSize={{ base: 'md' }}
                    color={'brand.200'}
                  >
                    Edit
                  </Text>
                  <Text
                    onClick={() => console.log('Archive Workspace')}
                    style={{ cursor: 'pointer' }}
                    fontSize={{ base: 'md' }}
                    color={'grey'}
                  >
                    Archive
                  </Text>
                  <Text
                    onClick={() => console.log('Delete Workspace')}
                    style={{ cursor: 'pointer' }}
                    fontSize={{ base: 'md' }}
                    color={'red.200'}
                  >
                    Delete
                  </Text>
                </HStack>
              </Box>
            </Center>
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  )
}
