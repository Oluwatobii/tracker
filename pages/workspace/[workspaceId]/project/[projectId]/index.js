import { Box } from '@chakra-ui/react'
import { useRouter } from 'next/router'

export default function Tickets() {
  const router = useRouter()
  const { projectId } = router.query

  return (
    <Box>
      <div>Tickets for Project ID: {projectId}</div>
    </Box>
  )
}
