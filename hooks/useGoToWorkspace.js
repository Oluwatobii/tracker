import { useMutation, useQueryClient } from 'react-query'
import { client } from '../utils/axios'
import useGetFetchQuery from './useGetFetchQuery'
import { useRouter } from 'next/router'
import { recentlyVisited } from '../utils/helpers'

const UPDATE_RECENETLY_URL = '/api/workspace/recentlyVisitedWorkspaces'

const updateRecentlyVisitedWorkspaces = async recentlyVisitedArray =>
  await client.post(UPDATE_RECENETLY_URL, recentlyVisitedArray)

export const useUpdateRecentlyVisited = () => {
  const queryClient = useQueryClient()
  return useMutation(updateRecentlyVisitedWorkspaces, {
    onSuccess: () => {
      queryClient.invalidateQueries('recentlyVisitedWorkspaces')
    }
  })
}

const useGoToWorkspace = () => {
  const router = useRouter()
  const recentlyVisitedData = useGetFetchQuery('recentlyVisitedWorkspaces')
  const recentlyVisitedArray =
    (recentlyVisitedData &&
      recentlyVisitedData.data &&
      recentlyVisitedData.data.recentlyVisited) ||
    []

  const { mutate, isError, error } = useUpdateRecentlyVisited()

  const handleGoToWorkspace = async ({ id, uuid }) => {
    try {
      const newRecentlyVisistedArray = recentlyVisited({
        workspaces: recentlyVisitedArray,
        uuid
      })

      const newRecentlyVisisted = { newRecentlyVisistedArray }

      mutate(newRecentlyVisisted)

      router.push(`/workspace/${id}`)
    } catch (error) {
      console.error('Updating Recently Visited Error: ', error)
    }
  }
  return { handleGoToWorkspace }
}

export default useGoToWorkspace
