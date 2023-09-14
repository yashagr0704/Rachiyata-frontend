import { useQuery } from '@tanstack/react-query'
import { fakeTopCollectionApi, topCollectionAPI } from './topCollection.api'

export const useTopCollection = ({ isReal }) => {
  const { data, isLoading, isError, error, isFetching } = useQuery(
    ['use-top-collection'],
    isReal ? topCollectionAPI : fakeTopCollectionApi,
  )
  return { data: data?.data, isLoading, isError, error, isFetching }
}
