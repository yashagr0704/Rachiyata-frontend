import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { fetchExploreApi } from './explore.api'

const useExplore = ({ categoryId, contentType }) => {
  const { data, isLoading, isError, error, isFetching } = useQuery(
    ['explore-list', categoryId, contentType],
    () => fetchExploreApi({ categoryId, contentType }),
    {
      enabled: Boolean(categoryId && contentType),
    },
  )

  return { data, isLoading, isError, error, isFetching }
}

export default useExplore
