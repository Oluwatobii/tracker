import { useRouter } from 'next/router'

export default function Admin() {
  const router = useRouter()
  const { workspaceId } = router.query

  return <div>Admin Page for Workspace ID {workspaceId}</div>
}
