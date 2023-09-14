import { useQuery } from '@tanstack/react-query'
import { fetchRankingSection } from './ranking.api'

export const useRanking = () => {
  const { data, isLoading, isError, error, isFetching } = useQuery(['use-ranking'], fetchRankingSection)
  return { data, isLoading, isError, error, isFetching }
}
