import {
  Divider,
  DrawerBody,
  DrawerHeader,
  DrawerContent,
  DrawerCloseButton
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import useSignOut from '../../../hooks/useSignOut'
import { Fragment, useId } from 'react'

export default function DrawerContents({ onClose }) {
  const router = useRouter()
  const { handleSignOut } = useSignOut()
  const id = useId()

  const MENU_LIST = [
    {
      key: `${id}-home`,
      name: 'Home',
      url: '/'
    },
    {
      key: `${id}-workspace`,
      name: 'Workspaces',
      url: '/workspace'
    },
    {
      key: `${id}-ticket`,
      name: 'Current Queue',
      url: '/ticket'
    },
    {
      key: `${id}-project`,
      name: 'Projects',
      url: '/project'
    },
    {
      key: `${id}-report`,
      name: 'Reports',
      url: '/report'
    },
    {
      key: `${id}-signout`,
      name: 'Sign Out',
      onClick: () => handleSignOut().then(() => onClose())
    }
  ]

  return (
    <DrawerContent>
      <DrawerCloseButton />
      <DrawerBody>
        {MENU_LIST.map(menu => (
          <Fragment key={menu.key}>
            <DrawerHeader
              onClick={
                menu.onClick
                  ? menu.onClick
                  : () => router.push(menu.url).then(() => onClose())
              }
            >
              {menu.name}
            </DrawerHeader>
            <Divider />
          </Fragment>
        ))}
      </DrawerBody>
    </DrawerContent>
  )
}
