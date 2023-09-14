import { useQuery } from '@tanstack/react-query'
import {
  fetchIncompleteListAPI,
  fetchNewArrivalAPI,
  fetchPotentialStarletListAPI,
  fetchTopCollectionListAPI,
  fetchWeaklyFeaturedListAPI,
} from './landing.api'

export const useNewArrivalList = () => {
  const { data, isLoading, isError, error, isFetching } = useQuery(['newArrival-list'], fetchNewArrivalAPI)
  return {
    List: data?.data?.data || [],
    data,
    isLoading,
    isError,
    error,
    isFetching,
  }
}

export const usePotentialStartletList = () => {
  const { data, isLoading, isError, error, isFetching } = useQuery(['potential-list'], fetchPotentialStarletListAPI)
  return {
    List: data?.data?.data || [],
    data,
    isLoading,
    isError,
    error,
    isFetching,
  }
}

export const useWeaklyFeaturedList = () => {
  const { data, isLoading, isError, error, isFetching } = useQuery(['weakly-list'], fetchWeaklyFeaturedListAPI)
  return {
    List: data?.data?.data || [],
    data,
    isLoading,
    isError,
    error,
    isFetching,
  }
}

export const useIncompleteList = () => {
  const { data, isLoading, isError, error, isFetching } = useQuery(['incomplete-list'], fetchIncompleteListAPI)
  return {
    List: data?.data?.data || [],
    data,
    isLoading,
    isError,
    error,
    isFetching,
  }
}

export const useTopCollectionList = ({ startDate, endDate }) => {
  const { refetch, data, isLoading, isError, error, isFetching } = useQuery(
    ['topCollection-list'],
    () => fetchTopCollectionListAPI({ startDate, endDate }),
    {
      onSuccess() {
        console.log('ss')
      },
    },
  )
  return {
    Obj: data?.data?.data || {
      novel: [],
      poem: [],
      shorts: [],
    },
    refetch,
    data,
    isLoading,
    isError,
    error,
    isFetching,
  }
}
