import {
  Box,
  Divider,
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  useColorModeValue
} from '@chakra-ui/react'
import { useRef } from 'react'

export default function ResponsiveNavigation({ user }) {
  const bg = useColorModeValue('brand', 'brand')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  return !user ? (
    <Box p={4}>
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
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <DrawerHeader>Menu Item...</DrawerHeader>
            <Divider />
            <DrawerHeader>Menu Item...</DrawerHeader>
            <Divider />
            <DrawerHeader>Menu Item...</DrawerHeader>
            <Divider />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  ) : null
}
