import {
  Flex,
  Box,
  Heading,
  Image,
  Text,
  Square,
  Button,
  Stack,
  useColorModeValue
} from '@chakra-ui/react'

export default function LandingPage() {
  const bg = useColorModeValue('gray.800', 'white')

  return (
    <Flex color={bg} justifyContent="space-between" p="100px" margin="45px">
      <Square size="550px">
        <Image
          height="auto"
          width="90%"
          src="landingpage.png"
          alt="Landing Page Art"
        />
      </Square>
      <Box justifyContent="center" maxW="32rem" mt={20}>
        <Flex direction="column">
          <Heading textAlign="center" mb={1} color={bg}>
            Welcome to
          </Heading>
          <Heading textAlign="center" mb={3} color="brand.200">
            Tracker
          </Heading>
        </Flex>
        <Text textAlign="center" fontSize="xl">
          Visualize and keeps track of new projects that are being created and
          bugs that are related to these projects.
        </Text>
        <Stack direction="row" spacing={4} mt={3} justifyContent="center">
          <Button bg="brand.200" colorScheme="brand.200" variant="solid">
            Login
          </Button>
          <Button
            colorScheme="brand.200"
            textColor="brand.200"
            variant="outline"
          >
            Sign Up
          </Button>
        </Stack>
        <Flex
          justifyContent="center"
          mt={200}
          boxShadow="base"
          gap="16px"
          p="6"
          rounded="md"
        >
          <Text>Powered by</Text>
          <Text color="brand.200"> Otbi Development </Text>
        </Flex>
      </Box>
    </Flex>
  )
}
