import { ApiInstance } from 'api/global.api'

export const fetchChapterListAPI = ({ bookId }) => {
  return ApiInstance({
    url: `/book/${bookId}/chapter`,
    method: 'GET',
  })
}

export const fetchChapterContentAPI = ({ bookId, chapterId }) => {
  return ApiInstance({
    url: `/book/${bookId}/chapter/${chapterId}`,
    method: 'GET',
  })
}
