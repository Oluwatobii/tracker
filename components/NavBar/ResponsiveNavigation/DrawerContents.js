import {
  Divider,
  DrawerBody,
  DrawerHeader,
  DrawerContent,
  DrawerCloseButton
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import useSignOut from '../../../hooks/useSignOut'

export default function DrawerContents({ onClose }) {
  const router = useRouter()
  const { handleSignOut } = useSignOut()

  return (
    <DrawerContent>
      <DrawerCloseButton />
      <DrawerBody>
        <DrawerHeader onClick={() => router.push('/').then(() => onClose())}>
          Home
        </DrawerHeader>
        <Divider />
        <DrawerHeader
          onClick={() => router.push('/workspace').then(() => onClose())}
        >
          Workspaces
        </DrawerHeader>
        <Divider />
        <DrawerHeader
          onClick={() => router.push('/ticket').then(() => onClose())}
        >
          Current Queue
        </DrawerHeader>
        <Divider />
        <DrawerHeader
          onClick={() => router.push('/report').then(() => onClose())}
        >
          Reports
        </DrawerHeader>
        <Divider />
        <DrawerHeader onClick={() => handleSignOut().then(() => onClose())}>
          Sign Out
        </DrawerHeader>
        <Divider />
      </DrawerBody>
    </DrawerContent>
  )
}
