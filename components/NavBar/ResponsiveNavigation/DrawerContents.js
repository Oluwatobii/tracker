import {
  Divider,
  DrawerBody,
  DrawerHeader,
  DrawerContent,
  DrawerCloseButton
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import useSignOut from '../../../hooks/useSignOut'

export default function DrawerContents() {
  const router = useRouter()
  const { handleSignOut } = useSignOut()

  return (
    <DrawerContent>
      <DrawerCloseButton />
      <DrawerBody>
        <DrawerHeader onClick={() => router.push('/')}>Home</DrawerHeader>
        <Divider />
        <DrawerHeader onClick={() => router.push('/workspace')}>
          Workspaces
        </DrawerHeader>
        <Divider />
        <DrawerHeader onClick={() => router.push('/ticket')}>
          Current Queue
        </DrawerHeader>
        <Divider />
        <DrawerHeader onClick={() => router.push('/report')}>
          Reports
        </DrawerHeader>
        <Divider />
        <DrawerHeader onClick={handleSignOut}>Sign Out</DrawerHeader>
        <Divider />
      </DrawerBody>
    </DrawerContent>
  )
}
