import { Flex, Box, Heading, Spacer } from '@chakra-ui/react'
import MenuList from './MenuList'

export default function Navigation({ user }) {
  return (
    <>
      <Flex width="100%" alignItems="center">
        {'id' in user ? <MenuList /> : null}
      </Flex>
    </>
  )
}
