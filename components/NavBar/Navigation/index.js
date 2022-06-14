import { Flex, Box, Heading, Spacer } from '@chakra-ui/react'
import MenuList from './MenuList'
import TrackerLogo from '../../../assets/svgs/TrackerLogo'

export default function Navigation({ user }) {
  return (
    <Flex minWidth="max-content" alignItems="center">
      {/* <TrackerLogo /> */}
      <Box p="4">
        <Heading size="md">Tracker</Heading>
      </Box>
      <Spacer />
      {'id' in user ? <MenuList /> : null}
    </Flex>
  )
}
