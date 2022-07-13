import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Alert,
  AlertIcon,
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
import { useAddWorkspaces } from '../../hooks/useWorkspaces'

export default function CreateWorkspace({ isOpen, onOpen, onClose }) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const { mutate: addWorkspace, isError, error } = useAddWorkspaces({ onClose })
  const handleCreateWorkspace = () => {
    const workspace = { name, description }
    addWorkspace(workspace)
    setName('')
    setDescription('')
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
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input
                  onChange={e => setName(e.target.value)}
                  value={name}
                  type="text"
                />
              </FormControl>
              <FormControl id="description">
                <FormLabel htmlFor="description">Description</FormLabel>
                <FormHelperText mb={2}>
                  Add a brief description about this workspace.
                </FormHelperText>
                <Textarea
                  type="text"
                  value={description}
                  size="sm"
                  h={{ base: '120px' }}
                  onChange={e => setDescription(e.target.value)}
                />
              </FormControl>
              {isError && error ? (
                <Stack direction="row" justifyContent="center">
                  <Alert status="error">
                    <AlertIcon />
                    {(error &&
                      error.response &&
                      error.response.data &&
                      error.response.data.error) ||
                      error.message}
                  </Alert>
                </Stack>
              ) : null}
              <ModalFooter gap={4} direction={{ base: 'column', lg: 'row' }}>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  w={{ base: '430px', md: '450px', lg: '530px' }}
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
                  w={{ base: '330px', md: '350px', lg: '400px' }}
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
