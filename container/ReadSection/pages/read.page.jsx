import React, { useCallback, useEffect, useRef, useState } from 'react'
import styled from '@emotion/styled'
import { mobileM } from 'styles/mediaQuery/breakPoints'
import DetailsSection from '../Section/DetailsSection'
import { useChapterList } from '../api/read.hooks'
import { useRouter } from 'next/router'
import ChapterSection from '../Section/ChapterSection'
import { selectChapter, setChapterLoadedById, setIsFirstTimeLoaded } from '../slices/chapter.slice'
import { useDispatch, useSelector } from 'react-redux'
import useWrapTimeout from 'hooks/useWrapTimeout'

const findLastIndex = (array, searchKey, searchValue) => {
  var index = array
    .slice()
    .reverse()
    .findIndex(x => x[searchKey] === searchValue)
  var count = array.length - 1
  var finalIndex = index >= 0 ? count - index : index

  return finalIndex
}

const ReadPage = () => {
  const { query } = useRouter()
  const mainRef = useRef()
  const bodyRef = useRef()
  const detailsSectionRef = useRef()
  const dispatch = useDispatch()
  const [isScrollTriggerIssued, setIsScrollTriggerIssued] = useState(false)
  const [isScrollUpOnce, setIsScrollUpOnce] = useState(false)
  const { isLoading, isFirstTimeLoaded } = useSelector(selectChapter)

  useWrapTimeout(() => {
    dispatch(setIsFirstTimeLoaded(false))
  }, 2000)

  useWrapTimeout(() => {
    if (!isScrollUpOnce) {
      mainRef.current?.scrollBy({
        top: 10,
        left: 0,
      })
      setIsScrollUpOnce(true)
    }
  }, 500)

  const { ChapterList } = useChapterList(query.bookId, query.chapterId)

  const isFirstChapterLoaded = !isLoading && ChapterList?.[0]?.isLoaded

  const lengthOfLoadedChapters = ChapterList?.filter(item => item.isLoaded).length

  const handleToScrollToPreviousPosition = useCallback(() => {
    if (isFirstChapterLoaded) {
      const secondChild = bodyRef?.current?.children[1]
      const totalHeight =
        detailsSectionRef?.current?.offsetHeight + secondChild?.offsetHeight + mainRef?.current?.scrollTop

      mainRef.current?.scrollBy({
        top: totalHeight,
        left: 0,
      })
    } else {
      const firstChild = bodyRef?.current?.firstChild
      const totalHeight = firstChild?.offsetHeight + mainRef?.current?.scrollTop

      mainRef.current?.scrollBy({
        top: totalHeight,
        left: 0,
      })
    }
    setIsScrollTriggerIssued(false)
  }, [isFirstChapterLoaded])

  useEffect(() => {
    if (!isLoading && isScrollTriggerIssued) handleToScrollToPreviousPosition()
  }, [handleToScrollToPreviousPosition, lengthOfLoadedChapters, isLoading, isFirstTimeLoaded, isScrollTriggerIssued])

  return (
    <Root>
      <Main
        ref={mainRef}
        onScroll={event => {
          const isScrolledToBottom = event.target?.scrollHeight - event.target?.scrollTop === event.target?.clientHeight
          const isScrolledToTop = event.target?.scrollTop === 0
          if (!isLoading) {
            if (isScrolledToTop) {
              const lastLoadedChapterIndex = ChapterList?.findIndex(chapter => chapter?.isLoaded)

              if (lastLoadedChapterIndex === -1 || lastLoadedChapterIndex === 0) return

              dispatch(setChapterLoadedById(ChapterList[lastLoadedChapterIndex - 1]?.id))
              setIsScrollTriggerIssued(true)
            }

            if (isScrolledToBottom) {
              const lastLoadedChapterIndex = findLastIndex(ChapterList, 'isLoaded', true)

              if (lastLoadedChapterIndex === -1 || lastLoadedChapterIndex === ChapterList.length) return

              dispatch(setChapterLoadedById(ChapterList[lastLoadedChapterIndex + 1]?.id))
            }
          }
        }}>
        <Body ref={bodyRef}>
          {isFirstChapterLoaded ? <DetailsSection ref={detailsSectionRef} /> : <></>}

          {ChapterList?.map(chapter =>
            chapter?.isLoaded ? <ChapterSection key={chapter?.id} item={chapter} /> : <></>,
          )}
        </Body>
      </Main>
    </Root>
  )
}

export default ReadPage

const Root = styled.div`
  width: 100%;
  height: 100vh;
  margin-top: auto;
  display: flex;
  justify-content: center;
`
const Main = styled.div`
  width: 100%;
  height: calc(100vh - ${({ theme }) => theme.mixins.toolbar.minHeight}px);
  margin-top: ${({ theme }) => theme.mixins.toolbar.minHeight}px;
  overflow-y: scroll;
  max-width: 1826px;
  background-color: ${({ theme }) => theme.palette.primary.main}22;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Body = styled.div`
  height: fit-content;
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;

  padding: 20px 28px;
  @media (max-width: 480px) {
    padding: 10px 18px;
  }

  background-color: ${({ theme }) => theme.palette.background.paper};
  gap: 20px;
`
