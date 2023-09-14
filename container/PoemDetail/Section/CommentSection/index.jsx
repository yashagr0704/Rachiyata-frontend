import styled from '@emotion/styled'
import { Skeleton } from '@mui/material'
import React from 'react'
import CommentListView from './components/CommentListView'

const CommentSection = ({ item, isLoading }) => {
  return (
    <Root>
      <CommentListView item={item} isLoading={isLoading} />
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  width: 100%;
  gap: 30px;
  margin-inline: var(--main-side-spacing);
  max-width: var(--main-max-width);
  width: calc(100% - var(--main-side-spacing) * 2);
  align-self: center;
  margin-top: 0px;
  flex-direction: column;
  @media (max-width: 800px) {
    gap: 10px;
  }
`
export default CommentSection
