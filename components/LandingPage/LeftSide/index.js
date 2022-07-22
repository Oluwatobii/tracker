import { Suspense } from 'react'
import { Square, Spinner } from '@chakra-ui/react'
import LandPagePicture from './LandPagePicture'

export default function LeftSide() {
  return (
    <Square
      w={{
        base: '200px',
        sm: '200px',
        md: '250px',
        lg: '250px',
        xl: '550px'
      }}
      h={{ base: '200px', sm: '200px', md: '250px', lg: '250px', xl: '620px' }}
      mt={{ base: '-40px', sm: '-40px', md: '-60px', lg: '-115px', xl: '0' }}
      ml={{ base: '21', sm: '21', md: '36', lg: '230', xl: '0' }}
      alignItems="center"
    >
      <Suspense
        fallback={<Spinner color={'brand.200'} size={{ base: 'md' }} />}
      >
        <LandPagePicture />
      </Suspense>
    </Square>
  )
}

//h= 620px
