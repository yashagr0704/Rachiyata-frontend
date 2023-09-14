import { ApiInstance } from 'api/global.api'

export const fetchNewArrivalAPI = () => {
  return ApiInstance({
    url: '/newarrivalbook',
    method: 'GET',
  })
}

export const fetchPotentialStarletListAPI = () => {
  return ApiInstance({
    url: '/potentialstartletbook/',
    method: 'GET',
  })
}

export const fetchWeaklyFeaturedListAPI = () => {
  return ApiInstance({
    url: '/weeklybook/',
    method: 'GET',
  })
}

export const fetchIncompleteListAPI = () => {
  return ApiInstance({
    url: '/incompletebookwatch/',
    method: 'GET',
  })
}

export const fetchTopCollectionListAPI = ({ startDate, endDate }) => {

  return ApiInstance({
    url: '/topbooklist/',
    params: {
      startDate,
      endDate,
    },
    method: 'GET',
  })
}
