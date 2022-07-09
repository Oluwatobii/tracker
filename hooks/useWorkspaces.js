import { useQuery } from 'react-query'
import { client } from '../utils/axios'

const WORKSPACE_URL = '/api/workspace'

const useWorkspaces = () => {
  const getWorkspaces = async () => await client.get(WORKSPACE_URL)
  const data = useQuery('workspaces', getWorkspaces)
  return data
}

export default useWorkspaces

/**
 * How to use:
 * const { data, isError, error, isFetched, isLoading } = useWorkspaces()
 */
