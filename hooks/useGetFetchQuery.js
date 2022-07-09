import { useQueryClient } from 'react-query'

const useGetFetchQuery = key => {
  const queryClient = useQueryClient()
  const data = queryClient.getQueryData(key)
  return data
}

export default useGetFetchQuery
