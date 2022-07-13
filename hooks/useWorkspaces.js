import { useQuery, useMutation, useQueryClient } from 'react-query'
import axios, { client } from '../utils/axios'

const WORKSPACE_URL = '/api/workspace'

const getWorkspaces = async () => await client.get(WORKSPACE_URL)
const addWorkspace = async workspace =>
  await client.post(WORKSPACE_URL, workspace)

const useWorkspaces = () => {
  const data = useQuery('workspaces', getWorkspaces)
  return data
}

export const useAddWorkspaces = ({ onClose }) => {
  const queryClient = useQueryClient()
  return useMutation(addWorkspace, {
    onSuccess: () => {
      queryClient.invalidateQueries('workspaces')
      if (typeof onClose !== 'undefined') onClose()
    }
  })
}
export default useWorkspaces

/**
 * How to use:
 * const { data, isError, error, isFetched, isLoading } = useWorkspaces()
 */
