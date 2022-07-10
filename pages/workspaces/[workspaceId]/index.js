import { useRouter } from 'next/router'

export default function Projects() {
  const router = useRouter()
  const { workspaceId } = router.query
  return <div>Project {workspaceId}</div>
}
