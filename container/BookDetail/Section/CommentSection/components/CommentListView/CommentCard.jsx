import React, { useState } from 'react'
import styled from '@emotion/styled'

import { Avatar, Button, Rating, Typography } from '@mui/material'

import StarIcon from '@mui/icons-material/Star'
import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded'
import CommentBankRoundedIcon from '@mui/icons-material/CommentBankRounded'
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded'
import ReplySection from '../ReplySection'
import { useLikeBookCommentAPI } from 'Container/BookDetail/api/bookDetail.hook'

const CommentCard = ({ item, parentCommentId }) => {
  const [likes, setLikes] = useState(item?.like_count)
  const { handleLikeBookComment } = useLikeBookCommentAPI({
    bookId: item?.book_id,
    commentId: item?.id,
    parentCommentId: parentCommentId,
    setLikes,
  })
  const [isReplyOpen, setIsReplyOpen] = useState(false)

  return (
    <Root className={isReplyOpen ? 'replyOpen' : ''}>
      <Header>
        <StyledAvatar
          sx={{ bgcolor: theme => theme.palette.primary.main }}
          variant="rounded"
          alt={item?.commentby}
          src={item?.profile_pic || '..'}
        />
        <Username variant="h6" component="div" color="secondary">
          {item?.commentby}
        </Username>
        <Rating
          color="primary"
          sx={{ ml: 'auto', color: theme => theme.palette.primary.main }}
          //   value={Number(item?.rating?.rate__avg).toFixed(1)}
          value={0}
          readOnly
          size="medium"
          precision={0.1}
          emptyIcon={<StarIcon fontSize="inherit" sx={{ color: theme => theme.palette.primary.main + '39' }} />}
        />
      </Header>
      <CommentText color="secondary" variant="body1">
        {item?.comments}
      </CommentText>

      <ActionList>
        <StyledButton startIcon={<ThumbUpRoundedIcon />} onClick={handleLikeBookComment}>
          {likes}
        </StyledButton>
        <StyledButton
          onClick={() => setIsReplyOpen(!isReplyOpen)}
          startIcon={<CommentBankRoundedIcon />}
          endIcon={
            <KeyboardArrowUpRoundedIcon
              sx={{ transition: '.25s ease-in-out', rotate: isReplyOpen ? '180deg' : '90deg' }}
            />
          }>
          {item?.comment_count}
        </StyledButton>
        <CommentedOn variant="subtitle2">{item?.created_at}</CommentedOn>
      </ActionList>

      {isReplyOpen && <ReplySection commentId={item?.id} />}
    </Root>
  )
}

const Root = styled.div`
  position: relative;
  padding: 15px;
  border-radius: 16px;
  height: fit-content;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.palette.primary.main}18;
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 650px;
  @media (max-width: 400px) {
    gap: 9px;
  }
  &.replyOpen {
    border: 1px solid ${({ theme }) => theme.palette.primary.main};
    box-shadow: 0px 7px 10px 1px rgba(0, 0, 0, 0.05);
    transform: scale(1.01);
  }
  background: #fff;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  @media (max-width: 400px) {
    gap: 8px;
  }
`

const CommentText = styled(Typography)`
  font-weight: 500;
  color: ${({ theme }) => theme.palette.secondary.main}bb;
  @media (max-width: 400px) {
    font-size: 0.95rem;
  }
  overflow: hidden;
`

const CommentedOn = styled(Typography)`
  font-weight: 500;
  color: ${({ theme }) => theme.palette.secondary.main}bb;
  font-size: 0.7rem;
  @media (max-width: 400px) {
  }
  align-self: end;
  margin-left: auto;
`

const StyledAvatar = styled(Avatar)`
  width: 35px;
  height: 35px;
  font-size: medium;
  font-weight: 600;
`

const Username = styled(Typography)``

const ActionList = styled.div`
  display: flex;
  gap: 15px;
`

const StyledButton = styled(Button)`
  font-weight: 600;
  color: ${({ theme }) => theme.palette.secondary.main};
  background-color: ${({ theme }) => theme.palette.primary.main}0c;
  padding: 9.5px 10px 9.5px 15px;
  display: flex;
  align-items: center;
  line-height: 1.05;
  .MuiSvgIcon-root {
    font-size: 1.07rem;
  }
  .MuiButton-startIcon {
    margin-right: 6px;
  }
  .MuiButton-endIcon {
    margin-left: 6px;
  }
  :hover {
    background-color: ${({ theme }) => theme.palette.primary.main}10;
  }
  &.highlight {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`

export default CommentCard
