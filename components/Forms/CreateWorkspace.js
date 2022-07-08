import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Stack,
  FormHelperText,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useColorModeValue
} from '@chakra-ui/react'
import { useState } from 'react'

export default function CreateWorkspace({ isOpen, onOpen, onClose }) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const handleCreateWorkspace = () => {
    console.log({ name, description })
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent mt={{ base: '250px' }}>
        <ModalHeader>Create Workspace</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}
          >
            <Stack
              spacing={4}
              w={'full'}
              maxW={'lg'}
              bg={useColorModeValue('white', 'gray.700')}
              p={6}
            >
              <FormControl id="name" isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                  onChange={e => setName(e.target.value)}
                  value={name}
                  type="text"
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="description">Description</FormLabel>
                <FormHelperText mb={2}>
                  Add a brief description about this workspace.
                </FormHelperText>
                <Textarea
                  id="description"
                  type="text"
                  value={description}
                  size="sm"
                  h={{ base: '120px' }}
                  onChange={e => setDescription(e.target.value)}
                />
              </FormControl>
              <ModalFooter gap={8} direction={{ base: 'column', lg: 'row' }}>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  w={{ base: '430px', lg: '530px' }}
                  _hover={{
                    bg: 'blue.500'
                  }}
                  onClick={handleCreateWorkspace}
                >
                  Create Workspace
                </Button>
                <Button
                  onClick={onClose}
                  bg={'red.400'}
                  w={{ base: '230px' }}
                  _hover={{
                    bg: 'red.500'
                  }}
                >
                  Cancel
                </Button>
              </ModalFooter>
            </Stack>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
