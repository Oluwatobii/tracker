import { Button } from '@chakra-ui/react'
import useSignOut from '../../hooks/useSignOut'

export default function SignOutButton() {
  const { disabled, handleSignOut } = useSignOut()

  return (
    <Button
      mr={3}
      isDisabled={disabled}
      colorScheme="red"
      onClick={handleSignOut}
    >
      Sign Out
    </Button>
  )
}
