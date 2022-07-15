import { Box, Flex } from '@chakra-ui/react'
import { useRef, useEffect } from 'react'
import lottie from 'lottie-web'
import animationData from './tracker-animation.json'

export default function TrackerAnimation() {
  const container = useRef(null)
  const shouldRender = useRef(true)

  useEffect(() => {
    if (shouldRender.current) {
      shouldRender.current = false
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
          h={{ base: '300px' }}
          w={{ base: '300px' }}
          p={{ base: '1px' }}
          ref={container}
        ></Box>
      </Box>
    </Flex>
  )
}
