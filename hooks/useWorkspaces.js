import { useQuery, useMutation, useQueryClient } from 'react-query'
import { client } from '../utils/axios'

const WORKSPACE_URL = '/api/workspace'
const WORKSPACE_USER_URL = '/api/workspace/user'

/** Get workspace */
const getWorkspaces = async () => await client.get(WORKSPACE_URL)

const useWorkspaces = () => {
  const data = useQuery('workspaces', getWorkspaces)
  return data
}

/** Add Workspace */
const addWorkspace = async workspace =>
  await client.post(WORKSPACE_URL, workspace)

export const useAddWorkspaces = ({ onClose }) => {
  const queryClient = useQueryClient()
  return useMutation(addWorkspace, {
    onSuccess: () => {
      queryClient.invalidateQueries('workspaces')
      if (typeof onClose !== 'undefined') onClose()
    }
  })
}

/** Get Workspace Users */
const getWorkspaceUsers = async () => await client.get(WORKSPACE_USER_URL)

export const useWorkspaceUsers = () => {
  const data = useQuery('workspace-users', getWorkspaceUsers)
  return data
}

export default useWorkspaces

/**
 * How to use:
 * const { data, isError, error, isFetched, isLoading } = useWorkspaces()
 */
