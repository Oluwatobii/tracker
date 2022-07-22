import {
  HStack,
  Button,
  Drawer,
  DrawerOverlay,
  useDisclosure,
  useColorModeValue
} from '@chakra-ui/react'
import DrawerContents from './DrawerContents'
import { useRef } from 'react'

export default function ResponsiveNavigation({ user }) {
  const bg = useColorModeValue('brand', 'brand')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  return 'id' in user ? (
    <HStack p={4}>
      <Button ref={btnRef} colorScheme={bg} onClick={onOpen}>
        Menu
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="lg"
      >
        <DrawerOverlay />
        <DrawerContents onClose={onClose} />
      </Drawer>
    </HStack>
  ) : null
}
