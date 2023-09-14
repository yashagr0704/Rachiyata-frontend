import { useQuery } from '@tanstack/react-query'
import { useDispatch, useSelector } from 'react-redux'
import { setChapterList, setChapterLoadedById } from '../slices/chapter.slice'
import { fetchChapterContentAPI, fetchChapterListAPI } from './read.api'

export const useChapterList = (poemId, chapterId) => {
  const dispatch = useDispatch()

  const ChapterList = useSelector(state => state.chapterPoem.list)

  const { data, isLoading, isError, error, isFetching } = useQuery(
    ['chapter-list', poemId],
    () => fetchChapterListAPI({ poemId }),
    {
      enabled: Boolean(poemId),
      onSuccess({ data }) {
        console.log(data)
        dispatch(setChapterList(data?.resources?.data))
        dispatch(setChapterLoadedById(chapterId))
      },
    },
  )

  return { ChapterList, isLoading, isError, error, isFetching }
}

export const useChapterContent = (poemId, chapterId) => {
  const { data, isLoading, isError, error, isFetching } = useQuery(
    ['chapter', poemId, chapterId],
    () => fetchChapterContentAPI({ poemId, chapterId }),
    {
      enabled: Boolean(poemId && chapterId),
    },
  )

  return { ChapterContent: data?.data?.data[0]?.chapter_content, isLoading, isError, error, isFetching }
}
