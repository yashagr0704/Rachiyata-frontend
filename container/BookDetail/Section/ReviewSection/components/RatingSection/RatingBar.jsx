import React from 'react'
import styled from '@emotion/styled'
import { Rating, Typography } from '@mui/material'

import StarIcon from '@mui/icons-material/Star'

const RatingBar = ({ label, rating }) => {
  return (
    <Root>
      <Label variant="subtitle2" color="secondary">
        {label}
      </Label>
      <Rating
        color="primary"
        sx={{ color: theme => theme.palette.primary.main }}
        value={rating}
        readOnly
        size="medium"
        precision={0.1}
        emptyIcon={<StarIcon fontSize="inherit" sx={{ color: theme => theme.palette.primary.main + '39' }} />}
      />
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
`

const Label = styled(Typography)`
  font-weight: 600;
  color: ${({ theme }) => theme.palette.secondary.main};
  line-height: 1;
`

export default RatingBar
