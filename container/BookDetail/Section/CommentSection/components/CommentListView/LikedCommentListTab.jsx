import React from 'react'
import styled from '@emotion/styled'

import { useBookCommentListAPI } from 'Container/BookDetail/api/bookDetail.hook'
import { useRouter } from 'next/router'

import CommentCard from './CommentCard'
import CreateCommentSection from '../CreateCommentSection'
import { Skeleton } from '@mui/material'

const LikedCommentListTab = ({ isLoading: isBookLoading }) => {
  const { query } = useRouter()
  const { CommentList, isLoading } = useBookCommentListAPI({ bookId: query?.bookId, commentId: null, sortBy: 'like' })

  return (
    <Root>
      <CreateCommentSection sortBy="like" />
      {isLoading || isBookLoading ? (
        <>
          <StyledSkeleton variant="rounded" height={160} />
          <StyledSkeleton variant="rounded" height={160} />
          <StyledSkeleton variant="rounded" height={160} />
        </>
      ) : (
        CommentList?.map(item => <CommentCard key={item.id} item={item} />)
      )}
    </Root>
  )
}

const StyledSkeleton = styled(Skeleton)`
  max-width: 650px;
`

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

export default LikedCommentListTab
