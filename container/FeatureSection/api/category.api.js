import { ApiInstance } from 'api/global.api'

export const categoryApi = () => {
  const Url = '/category'
  return ApiInstance({
    url: Url,
    method: 'GET',
  })
}
