import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react'
import { useRef } from 'react'
import LogInForm from './LogInForm'

export default function LogInModal() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = useRef()
  const finalRef = useRef()
  return (
    <>
      <Button
        onClick={onOpen}
        colorScheme="brand"
        textColor="brand"
        variant="solid"
      >
        Login
      </Button>

      <Modal
        size="xl"
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Welcome Back</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <LogInForm />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
