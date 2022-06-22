import {
  Button,
  Heading,
  Box,
  HStack,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Text,
  InputRightElement,
  Stack,
  Alert,
  AlertIcon,
  Tooltip,
  useColorModeValue
} from '@chakra-ui/react'
import {
  ViewIcon,
  ViewOffIcon,
  CheckIcon,
  CloseIcon,
  InfoIcon
} from '@chakra-ui/icons'
import { useState, useRef } from 'react'
import Cookies from 'js-cookie'
import jwt_decode from 'jwt-decode'
import { useForm } from 'react-hook-form'
import {
  NAME_REGEX,
  EMAIL_REGEX,
  PASSWORD_REGEX
} from '../../../../utils/regex.js'
import axios from '../../../../utils/axios.js'
import useAuth from '../../../../hooks/useAuth.js'

const REGISTER_URL = '/api/auth/register'

export default function SignUpForm() {
  const { setUser } = useAuth()

  const errRef = useRef()

  const [showPassword, setShowPassword] = useState(false)
  const [showMatchPassword, setShowMatchPassword] = useState(false)

  const [errMsg, setErrMsg] = useState('')
  const [success, setSuccess] = useState(false)

  const {
    handleSubmit,
    register,
    watch,
    reset,
    formState: { errors, isSubmitting }
  } = useForm()

  const firstName = watch('firstName')
  const lastName = watch('lastName')
  const email = watch('email')
  const password = watch('password]')
  const confirmPassword = watch('confirmPassword')

  const onSubmit = async values => {
    const { firstName, lastName, email, password } = values
    try {
      const response = await axios.post(
        REGISTER_URL,
        { firstName, lastName, email, password },
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
      )

      const token = Cookies.get('accessToken')
      const accessToken = token && token.split(' ')[1]
      const { user } = jwt_decode(accessToken)

      setErrMsg('')
      setSuccess(true)
      reset()
      setUser(user)
      localStorage.setItem('user', JSON.stringify(user))
    } catch (error) {
      /* console.error('Registration Error: ', error) */
      setSuccess(false)
      localStorage.removeItem('user')
      setUser({})
      if (!error.response || !error.response.data || !error.response.data.error)
        setErrMsg(error.message)
      else setErrMsg(error.response.data.error)
      errRef && errRef.current && errRef.current.focus()
    }
  }

  return (
    <Flex
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.500', 'gray.800')}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl isRequired>
                    <FormLabel htmlFor="firstName">
                      First Name{' '}
                      {errors.firstName ? (
                        <Tooltip
                          label="3 to 24 alphabet characters."
                          fontSize="md"
                          aria-label="A tooltip"
                        >
                          <InfoIcon />
                        </Tooltip>
                      ) : null}
                      {firstName && !errors.firstName ? (
                        <CheckIcon color="green.500" />
                      ) : null}
                      {firstName && errors.firstName ? (
                        <CloseIcon w={3} h={3} color="red.500" />
                      ) : null}
                    </FormLabel>
                    <Input
                      type="text"
                      id="firstName"
                      {...register('firstName', {
                        required: true,
                        pattern: NAME_REGEX
                      })}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl isRequired>
                    <FormLabel htmlFor="lastName">
                      Last Name{' '}
                      {errors.lastName ? (
                        <Tooltip
                          label="3 to 24 alphabet characters."
                          fontSize="md"
                          aria-label="A tooltip"
                        >
                          <InfoIcon />
                        </Tooltip>
                      ) : null}
                      {lastName && !errors.lastName ? (
                        <CheckIcon color="green.500" />
                      ) : null}
                      {lastName && errors.lastName ? (
                        <CloseIcon w={3} h={3} color="red.500" />
                      ) : null}
                    </FormLabel>
                    <Input
                      type="text"
                      id="lastName"
                      {...register('lastName', {
                        required: true,
                        pattern: NAME_REGEX
                      })}
                    />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl isRequired>
                <FormLabel htmlFor="email">
                  Email address{' '}
                  {errors.email ? (
                    <Tooltip
                      label="Not a valid email address."
                      fontSize="md"
                      aria-label="A tooltip"
                    >
                      <InfoIcon />
                    </Tooltip>
                  ) : null}
                  {email && !errors.email ? (
                    <CheckIcon color="green.500" />
                  ) : null}
                  {email && errors.email ? (
                    <CloseIcon w={3} h={3} color="red.500" />
                  ) : null}{' '}
                </FormLabel>
                <Input
                  type="email"
                  id="email"
                  {...register('email', {
                    required: true,
                    pattern: EMAIL_REGEX
                  })}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>
                  Password{' '}
                  {errors.password ? (
                    <Tooltip
                      label="8 to 24 characters.
                      Must include uppercase and lowercase letters, a number and a special character.
                      Allowed special characters: !@#.$% "
                      fontSize="md"
                      aria-label="A tooltip"
                    >
                      <InfoIcon />
                    </Tooltip>
                  ) : null}
                  {password && !errors.password ? (
                    <CheckIcon color="green.500" />
                  ) : null}
                  {password && errors.password ? (
                    <CloseIcon w={3} h={3} color="red.500" />
                  ) : null}
                </FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    {...register('password', {
                      required: true,
                      pattern: PASSWORD_REGEX
                    })}
                  />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword(showPassword => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>
                  Confirm Password{' '}
                  {errors.confirmPassword ? (
                    <Tooltip
                      label="Must match the first password input field."
                      fontSize="md"
                      aria-label="A tooltip"
                    >
                      <InfoIcon />
                    </Tooltip>
                  ) : null}
                  {confirmPassword && !errors.confirmPassword ? (
                    <CheckIcon color="green.500" />
                  ) : null}
                  {confirmPassword && errors.confirmPassword ? (
                    <CloseIcon w={3} h={3} color="red.500" />
                  ) : null}
                </FormLabel>
                <InputGroup>
                  <Input
                    type={showMatchPassword ? 'text' : 'password'}
                    id="confirmPassword"
                    {...register('confirmPassword', {
                      required: true,
                      validate: value => value === password
                    })}
                  />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowMatchPassword(
                          showMatchPassword => !showMatchPassword
                        )
                      }
                    >
                      {showMatchPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              {errMsg ? (
                <Stack direction="row" justifyContent="center">
                  <Alert ref={errRef} status="error">
                    <AlertIcon />
                    {errMsg}
                  </Alert>
                </Stack>
              ) : null}
              {success ? (
                <Stack direction="row" justifyContent="center">
                  <Alert status="success">
                    <AlertIcon />
                    <Text>Your Account has been Successfully Created</Text>
                  </Alert>
                </Stack>
              ) : null}
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'brand.300'}
                  color={'white'}
                  _hover={{
                    bg: 'brand.900'
                  }}
                  isLoading={isSubmitting}
                  type="submit"
                >
                  Sign up
                </Button>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  )
}
