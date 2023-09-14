import styled from '@emotion/styled'
import { Skeleton } from '@mui/material'
import { useBookCommentListAPI } from 'Container/BookDetail/api/bookDetail.hook'
import { useRouter } from 'next/router'
import React from 'react'
import CreateCommentSection from '../CreateCommentSection'
import CommentCard from './CommentCard'

const NewestCommentListTab = () => {
  const { query } = useRouter()
  const { CommentList, isLoading } = useBookCommentListAPI({ bookId: query?.bookId, commentId: null, sortBy: '-date' })

  return (
    <Root>
      <CreateCommentSection sortBy="-date" />
      {isLoading ? (
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
export default NewestCommentListTab
