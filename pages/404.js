import { Text, VStack, Heading, Button, Box, Flex } from '@chakra-ui/react'
import NextLink from 'next/link'
import UnavailableAnimation from '../assets/animation/404Animation'

export default function PageNotFound() {
  return (
    <VStack top="50%" left="50%">
      <UnavailableAnimation />
      <Text
        color="brand"
        fontSize={{ base: '45px', sm: '45px', md: '55px', lg: '60px' }}
        textAlign={{ base: 'center', sm: 'center', lg: 'center' }}
      >
        Oops!
      </Text>
      <Box maxW="540px">
        <Text
          fontSize={{ base: 'sm', lg: 'xl' }}
          textAlign={{
            base: 'center'
          }}
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
