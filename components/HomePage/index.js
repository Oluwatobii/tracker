import useClient from '../../hooks/useClient'
import { useEffect, useState } from 'react'
import { Button } from '@chakra-ui/react'

export default function HomePage() {
  const client = useClient()
  const [value, setValue] = useState(false)
  useEffect(() => {
    const getPorojects = async () => {
      try {
        const response = await client('/api/project')
      } catch (error) {
        console.error('Home Page request projets error: ', error)
      }
    }
    getPorojects()
  }, [value])

  return (
    <Button colorScheme="blue" onClick={() => setValue(value => !value)}>
      {' '}
      Get Projects
    </Button>
  )
}
