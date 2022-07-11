import { Box, Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'

export default function Projects() {
  const router = useRouter()
  const { workspaceId } = router.query

  return (
    <Box>
      <div>Project for Workspace ID: {workspaceId}</div>
      <Button
        ml="10px"
        colorScheme="purple"
        size={{ base: 'sm', lg: 'md' }}
        onClick={() => router.push(`/workspaces/${workspaceId}/admin`)}
      >
        Admin
      </Button>
    </Box>
  )
}
