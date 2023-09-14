import { ApiInstance } from 'api/global.api'
import axios from 'axios'

export const fakeTopCollectionApi = async () => {
  const URL = 'https://novel-jsonserver.vercel.app/topbooklist'
  const res = await axios.get(URL)
  return {
    data: {
      data: {
        novels: res.data,
        poems: res.data,
        shorts: res.data,
      },
    },
  }
}

export const topCollectionAPI = () => {
  const Url = '/topbooklist?startDate=2022-12-01&endDate=2022-12-07'
  return ApiInstance({
    url: Url,
    method: 'GET',
  })
}
