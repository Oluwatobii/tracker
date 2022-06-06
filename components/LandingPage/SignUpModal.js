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
import SignUpForm from './SignUpForm'
import { useRef } from 'react'

export default function SignUpModal() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = useRef()
  const finalRef = useRef()

  return (
    <>
      <Button
        onClick={onOpen}
        colorScheme="brand.300"
        textColor="brand.300"
        variant="outline"
      >
        Sign Up
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
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <SignUpForm />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
