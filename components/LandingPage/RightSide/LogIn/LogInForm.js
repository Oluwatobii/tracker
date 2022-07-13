import {
  Button,
  Heading,
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Link,
  Text,
  Checkbox,
  Alert,
  AlertIcon,
  Stack,
  useColorModeValue
} from '@chakra-ui/react'
import { useState, useRef } from 'react'
import Cookies from 'js-cookie'
import jwt_decode from 'jwt-decode'
import { useForm } from 'react-hook-form'
import axios from '../../../../utils/axios.js'
import useAuth from '../../../../hooks/useAuth.js'

const LOGIN_URL = '/api/auth/login'

export default function LogInForm() {
  const { setUser } = useAuth()
  const errRef = useRef()
  const [errMsg, setErrMsg] = useState('')
  const [success, setSuccess] = useState(false)

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting }
  } = useForm()

  const onSubmit = async values => {
    const { email, password } = values
    try {
      const response = await axios.post(
        LOGIN_URL,
        { email, password },
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
      /* console.error('Log in Error: ', error) */
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
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool features✌️
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
              <FormControl isRequired>
                <FormLabel htmlFor="email">Email address</FormLabel>
                <Input
                  type="email"
                  id="email"
                  {...register('email', {
                    required: true
                  })}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input
                  type="password"
                  id="password"
                  {...register('password', {
                    required: true
                  })}
                />
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
                    <Text>Successfully Logged in</Text>
                  </Alert>
                </Stack>
              ) : null}
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}
                >
                  {/* <Checkbox>Remember me</Checkbox>
                  <Link color={'brand'}>Forgot password?</Link> */}
                </Stack>
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
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  )
}
