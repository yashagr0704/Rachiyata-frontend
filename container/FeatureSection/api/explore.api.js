import { ApiInstance } from 'api/global.api'
import axios from 'axios'

export const fakeExploreApi = async () => {
  const URL = 'https://novel-jsonserver.vercel.app/explorebook'
  const res = await axios.get(URL)
  return {
    data: { resources: { data: res.data } },
  }
}
// data?.data?.resources?.data

export const fetchExploreApi = ({ categoryId, contentType }) => {
  return ApiInstance({
    url:
      contentType?.toLocaleLowerCase() === 'poem'
        ? `/explorepoem?category_id=${categoryId}`
        : `/explorebook?category_id=${categoryId}`,
    method: 'GET',
  })
}
