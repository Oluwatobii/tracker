import { client } from '../utils/axios'
import { useEffect } from 'react'
import useRefreshToken from './useRefreshToken'

const useClient = () => {
  const { refresh } = useRefreshToken()

  useEffect(() => {
    const requestIntercept = client.interceptors.request.use(
      config => {
        return config
        /*
        return {
          ...config,
          cancelToken: new CancelToken((cancel) => cancel('Cancel repeated request'))
        }
        */
      },
      error => Promise.reject(error)
    )

    const responseIntercept = client.interceptors.response.use(
      response => response,
      async error => {
        const prevRequest = error && error.config
        if (
          error &&
          error.response &&
          error.response.status === 403 &&
          !(prevRequest && prevRequest.sent)
        ) {
          prevRequest.sent = true
          await refresh()
          return await client(prevRequest)
        }
        return Promise.reject(error)
      }
    )

    return () => {
      client.interceptors.request.eject(requestIntercept)
      client.interceptors.response.eject(responseIntercept)
    }
  }, [])

  return client
}

export default useClient
