import { useQuery } from '@tanstack/react-query'
import { useDispatch, useSelector } from 'react-redux'
import { setChapterList, setChapterLoadedById } from '../slices/chapter.slice'
import { fetchChapterContentAPI, fetchChapterListAPI } from './read.api'

export const useChapterList = (bookId, chapterId) => {
  const dispatch = useDispatch()

  const ChapterList = useSelector(state => state.chapter.list)

  const { data, isLoading, isError, error, isFetching } = useQuery(
    ['chapter-list', bookId],
    () => fetchChapterListAPI({ bookId }),
    {
      enabled: Boolean(bookId),
      onSuccess({ data }) {
        console.log(data);
        dispatch(setChapterList(data?.resources?.data))
        dispatch(setChapterLoadedById(chapterId))
      },
    },
  )

  return { ChapterList, isLoading, isError, error, isFetching }
}

export const useChapterContent = (bookId, chapterId) => {
  const { data, isLoading, isError, error, isFetching } = useQuery(
    ['chapter', bookId, chapterId],
    () => fetchChapterContentAPI({ bookId, chapterId }),
    {
      enabled: Boolean(bookId && chapterId),
    },
  )

  return { ChapterContent: data?.data?.data[0]?.chapter_content, isLoading, isError, error, isFetching }
}
