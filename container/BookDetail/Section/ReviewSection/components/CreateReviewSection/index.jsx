import styled from '@emotion/styled'
import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import CreateReviewModal from './CreateReviewModal'

const CreateReviewSection = ({bookId}) => {
  const [open, setOpen] = useState(false)
  return (
    <Root>
      <CreateReviewModal bookId={bookId} open={open} setOpen={setOpen} />
      <InfoText variant="subtitle1">Share your thoughts with others</InfoText>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Write a review
      </Button>
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  gap: 20px;
  padding: 10px;
`

const InfoText = styled(Typography)`
  font-weight: 500;
  color: ${({ theme }) => theme.palette.secondary.main};
`

export default CreateReviewSection
