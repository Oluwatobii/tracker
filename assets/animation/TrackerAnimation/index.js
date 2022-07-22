import { useRef, useEffect, Suspense } from 'react'
import { Box, Flex, Image } from '@chakra-ui/react'
import lottie from 'lottie-web'
import animationData from './tracker-animation.json'

function DefaultImage() {
  return (
    <Box mt={{ base: '25px' }} maxW={{ base: '330px' }}>
      <Image
        height="auto"
        width="90%"
        src="tracker-homepage-with-background.png"
        alt="Home Page Art"
      />
    </Box>
  )
}

function Animation() {
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
    <Box
      h={{ base: '300px' }}
      w={{ base: '300px' }}
      p={{ base: '1px' }}
      ref={container}
    ></Box>
  )
}

export default function TrackerAnimation() {
  return (
    <Flex>
      <Box as="section" zIndex="1">
        <Suspense fallback={<DefaultImage />}>
          <Animation />
        </Suspense>
      </Box>
    </Flex>
  )
}
