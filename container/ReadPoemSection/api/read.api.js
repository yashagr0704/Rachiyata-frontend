import { ApiInstance } from 'api/global.api'

export const fetchChapterListAPI = ({ poemId }) => {
  return ApiInstance({
    url: `/poem/${poemId}/chapter`,
    method: 'GET',
  })
}

export const fetchChapterContentAPI = ({ poemId, chapterId }) => {
  return ApiInstance({
    url: `/poem/${poemId}/chapter/${chapterId}`,
    method: 'GET',
  })
}
