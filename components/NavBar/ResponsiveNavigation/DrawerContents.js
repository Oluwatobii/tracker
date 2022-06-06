import {
  Divider,
  DrawerBody,
  DrawerHeader,
  DrawerContent,
  DrawerCloseButton
} from '@chakra-ui/react'

export default function DrawerContents() {
  return (
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
  )
}
