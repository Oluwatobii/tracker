import {
  Divider,
  DrawerBody,
  DrawerHeader,
  DrawerContent,
  DrawerCloseButton
} from '@chakra-ui/react'
import useSignOut from '../../../hooks/useSignOut'

export default function DrawerContents() {
  const { handleSignOut } = useSignOut()

  return (
    <DrawerContent>
      <DrawerCloseButton />
      <DrawerBody>
        <DrawerHeader>Home</DrawerHeader>
        <Divider />
        <DrawerHeader>Workspaces</DrawerHeader>
        <Divider />
        <DrawerHeader>Current Queue</DrawerHeader>
        <Divider />
        <DrawerHeader>Reports</DrawerHeader>
        <Divider />
        <DrawerHeader onClick={handleSignOut}>Sign Out</DrawerHeader>
        <Divider />
      </DrawerBody>
    </DrawerContent>
  )
}
