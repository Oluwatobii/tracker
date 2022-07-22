import { useQuery, useMutation, useQueryClient } from 'react-query'
import { client } from '../utils/axios'

const USER_ROLE_URL = '/api/auth/role'

/** Get User Roles */
const getUserRoles = async () => await client.get(USER_ROLE_URL)

const useUserRoles = () => {
  const data = useQuery('roles', getUserRoles)
  return data
}

/** Update User Roles */
const updateRoles = async roles => await client.post(USER_ROLE_URL, roles)

export const useUpdateRoles = () => {
  const queryClient = useQueryClient()
  return useMutation(updateRoles, {
    onSuccess: () => {
      queryClient.invalidateQueries('roles')
      queryClient.invalidateQueries('workspaces')
      queryClient.invalidateQueries('workspace-users')
    }
  })
}

export default useUserRoles
