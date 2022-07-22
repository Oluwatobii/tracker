import { useRef, useEffect } from 'react'
import { Box, Flex } from '@chakra-ui/react'
import lottie from 'lottie-web'
import animationData from './Underconstruction.json'

export default function ComingSoonAnimation() {
  const container = useRef(null)
  const rendered = useRef(true)

  useEffect(() => {
    if (rendered.current) {
      rendered.current = false
      lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData
      })
    }
  }, [])

  return (
    <Flex>
      <Box as="section" zIndex="1">
        <Box
          h={{ base: '200px', lg: '350px' }}
          w={{ base: '400px', lg: '700px' }}
          p={{ base: '1px' }}
          ref={container}
        ></Box>
      </Box>
    </Flex>
  )
}
