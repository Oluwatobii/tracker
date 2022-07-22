import { Text, VStack, Heading, Button, Box, Flex } from '@chakra-ui/react'
import NextLink from 'next/link'
import ComingSoonAnimation from '../../assets/animation/ComingSoonAnimation'

export default function ComingSoon() {
  return (
    <VStack top="50%" left="50%">
      <ComingSoonAnimation />
      <Text
        color="brand"
        fontSize={{ base: '45px', sm: '45px', md: '55px', lg: '60px' }}
        textAlign={{ base: 'center', sm: 'initial', lg: 'center' }}
      >
        COMING SOON!
      </Text>
      <Heading
        as="h3"
        size="lg"
        textAlign={{ base: 'center', sm: 'initial', lg: 'center' }}
      >
        THIS PAGE IS UNDER CONSTRUCTION
      </Heading>
      <Box maxW="540px">
        <Text
          textAlign={{ base: 'initial', sm: 'initial', lg: 'center' }}
          fontSize={{ base: 'sm', lg: 'xl' }}
        >
          Please check back in with us in the coming months
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
