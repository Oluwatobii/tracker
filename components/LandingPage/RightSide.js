import {
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Stack,
  useColorModeValue
} from '@chakra-ui/react'

export default function RightSide() {
  const bg = useColorModeValue('gray.800', 'white')

  return (
    <Box
      justifyContent="center"
      mt={{ base: 10, sm: 10, md: 10, lg: 10, xl: 100 }}
    >
      <Flex direction="column">
        <Heading
          textAlign={{ base: 'initial', lg: 'center' }}
          mb={1}
          color={bg}
        >
          Welcome to
        </Heading>
        <Heading
          textAlign={{ base: 'initial', lg: 'center' }}
          mb={3}
          color="brand.300"
        >
          Tracker
        </Heading>
      </Flex>
      <Text
        textAlign={{ base: 'initial', sm: 'initial', lg: 'center' }}
        fontSize={{ base: 'sm', lg: 'xl' }}
      >
        Visualize and keeps track of new projects that are being created and
        bugs that are related to these projects.
      </Text>
      <Stack
        direction={{ base: 'column', lg: 'row' }}
        spacing={4}
        mt={3}
        justifyContent="center"
      >
        <Button bg="brand.300" colorScheme="brand.300" variant="solid">
          Login
        </Button>
        <Button colorScheme="brand.300" textColor="brand.300" variant="outline">
          Sign Up
        </Button>
      </Stack>
      <Flex
        justifyContent="center"
        mt={{ base: 5, sm: 5, md: 7, lg: 8, xl: 200 }}
        boxShadow="base"
        gap="16px"
        p={{ base: '3', lg: '6' }}
        rounded="md"
      >
        <Text fontSize={{ base: 'xs', lg: 'xl' }}>Powered by</Text>
        <Text fontSize={{ base: 'xs', lg: 'xl' }} color="brand.300">
          {' '}
          Otbi Development{' '}
        </Text>
      </Flex>
    </Box>
  )
}
