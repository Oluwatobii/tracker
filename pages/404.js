import { Text, VStack, Heading, Button, Box, Flex } from '@chakra-ui/react'
import NextLink from 'next/link'

export default function PageNotFound() {
  return (
    <VStack top="50%" left="50%">
      <Text
        color="brand"
        fontSize={{ base: '55px', sm: '55px', md: '55px', lg: '70px' }}
        textAlign={{ base: 'center', sm: 'initial', lg: 'center' }}
      >
        Oops!
      </Text>
      <Heading as="h3" size="lg">
        404 - PAGE NOT FOUND
      </Heading>
      <Box maxW="540px">
        <Text
          textAlign={{ base: 'initial', sm: 'initial', lg: 'center' }}
          fontSize={{ base: 'sm', lg: 'xl' }}
        >
          The Page you are looking for might have been removed, had its name
          changed or is temporarily unavailable
        </Text>
      </Box>
      <NextLink href="/" passHref>
        <Button colorScheme="brand" size="md">
          Go To HomePage
        </Button>
      </NextLink>
    </VStack>
  )
}
