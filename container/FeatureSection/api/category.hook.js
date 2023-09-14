import { useQuery } from '@tanstack/react-query'
import { categoryApi } from './category.api'

const useCategoryApi = () => {
  const { data, isLoading, isError, error, isFetching } = useQuery(['use-category'], categoryApi)
  return { data, isLoading, isError, error, isFetching }
}

export default useCategoryApi
