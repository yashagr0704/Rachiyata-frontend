import styled from '@emotion/styled'
import React from 'react'
import ChapterBar from './ChapterBar'

const ChapterListTab = ({ item }) => {
  return (
    <Root>
      {item?.chapter?.map(chapter => (
        <ChapterBar
          key={chapter.id}
          chapterId={chapter.id}
          ChapterNumber={chapter.chapter_sequence}
          text={chapter.chapter_title}
          paid={chapter.paid}
        />
      ))}
      {/* <ChapterBar ChapterNumber={3} text="paid chapter example" paid /> */}
    </Root>
  )
}

const Root = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: column;
  max-height: 250px;
  overflow-y: scroll;
  overflow-x: hidden;
  @media (max-width: 800px) {
    gap: 5px;
    max-height: auto;
    overflow: auto;
  }
`

export default ChapterListTab
