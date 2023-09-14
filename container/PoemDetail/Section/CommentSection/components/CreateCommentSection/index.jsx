import React from 'react'
import styled from '@emotion/styled'

import { Avatar, Button, CircularProgress, Rating, Typography } from '@mui/material'
import { FormProvider, useForm } from 'react-hook-form'
import { useRouter } from 'next/router'

import { useCreatePoemCommentAPI } from 'Container/PoemDetail/api/poemDetail.hook'

import StarIcon from '@mui/icons-material/Star'
import SendRoundedIcon from '@mui/icons-material/SendRounded'
import StyledTextField from 'Components/form-components/StyledTextField'
import { useSelector } from 'react-redux'

const CreateCommentSection = ({ commentId, sortBy }) => {
  const { query } = useRouter()
  const { data } = useSelector(store => store.user)

  const { handleCreatePoemComment, isLoading } = useCreatePoemCommentAPI({
    poemId: query?.poemId,
    commentId: commentId,
    sortBy,
  })

  const methods = useForm({
    // resolver: yupResolver(schema),
    defaultValues: {
      comments: '',
    },
  })

  const { handleSubmit } = methods

  return (
    <Root>
      <FormProvider {...methods}>
        <Header>
          <StyledAvatar
            sx={{ bgcolor: theme => theme.palette.primary.main }}
            variant="rounded"
            alt={data?.username}
            src={data?.profile_pic}
          />
          <Username variant="h6" component="div" color="secondary">
            {data?.username}
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
          <CommentField placeholder="Add Comment here ..." variant="filled" name="comments" multiline />
        </CommentText>
        <ActionList>
          <StyledButton disabled={isLoading} onClick={() => methods.reset({ comments: '' })}>
            Cancel
          </StyledButton>
          <StyledButton
            disabled={isLoading}
            endIcon={
              isLoading ? (
                <CircularProgress
                  size={16}
                  sx={{
                    color: theme => theme.palette.grey[500],
                  }}
                />
              ) : (
                <SendRoundedIcon />
              )
            }
            onClick={handleSubmit(handleCreatePoemComment)}>
            Comment
          </StyledButton>
        </ActionList>
      </FormProvider>
    </Root>
  )
}

const Root = styled.div`
  position: relative;
  padding: 5px;
  border-radius: 16px;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 650px;
  @media (max-width: 400px) {
    padding: 5px;
  }
`

const CommentField = styled(StyledTextField)`
  width: 100%;
  /* background-color: ${({ theme }) => theme.palette.primary.main}; */
  .MuiFilledInput-root {
    background-color: ${({ theme }) => theme.palette.primary.main}0c;
    border-radius: 16px;
    padding: 10px 15px;
    :hover {
      background-color: ${({ theme }) => theme.palette.primary.main}10;
    }
    :focus-within {
      background-color: ${({ theme }) => theme.palette.primary.main}10;
    }
  }
  .MuiFilledInput-input {
    padding: 0;
  }
  .MuiFilledInput-underline:after {
    border-bottom: none;
  }
  .MuiFilledInput-underline:before {
    border-bottom: none;
  }
  .MuiFilledInput-underline:hover:not(.Mui-disabled):before {
    border-bottom: none;
  }
  .MuiFilledInput-underline.Mui-focused:after {
    border-bottom: none;
  }
  .MuiFilledInput-underline.Mui-focused:before {
    border-bottom: none;
  }

  .MuiFilledInput-multiline {
    padding: 0;
  }
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
  padding: 9.5px 15px 9.5px 15px;
  display: flex;
  align-items: center;
  line-height: 1.05;
  .MuiSvgIcon-root {
    font-size: 1rem;
  }
  :hover {
    background-color: ${({ theme }) => theme.palette.primary.main}10;
  }
  &.highlight {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`

export default CreateCommentSection
