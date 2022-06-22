import { Flex, useColorModeValue } from '@chakra-ui/react'
import LeftSide from './LeftSide'
import RightSide from './RightSide'

export default function LandingPage() {
  const bg = useColorModeValue('gray.800', 'white')

  return (
    <Flex
      color={bg}
      direction={{
        base: 'column',
        sm: 'column',
        md: 'column',
        lg: 'column',
        xl: 'row'
      }}
      p={{ base: '90px', lg: '100px' }}
      margin={{ base: '-40px', lg: '45px' }}
    >
      <LeftSide />
      <RightSide />
    </Flex>
  )
}
