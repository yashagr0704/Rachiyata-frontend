import { Rating, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import StarIcon from '@mui/icons-material/Star'
import styled from '@emotion/styled'

const Heading = ({ item }) => {
  const isTablet = useMediaQuery('(max-width: 735px)')

  return (
    <Root>
      <HeadingText variant="h5" component="div" color="secondary">
        {item?.rating?.rate__count} Reviews
      </HeadingText>
      <Rating
        color="primary"
        sx={{ color: theme => theme.palette.primary.main }}
        value={Number(item?.rating?.rate__avg).toFixed(1) || 0}
        readOnly
        size={isTablet ? 'medium' : 'large'}
        precision={0.1}
        emptyIcon={<StarIcon fontSize="inherit" sx={{ color: theme => theme.palette.primary.main + '39' }} />}
      />
      <RatingText variant="h5" component="div" color="secondary">
        {Number(Number(item?.rating?.rate__avg).toFixed(1)).toFixed(1) || 'N / A'}
      </RatingText>
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  @media (max-width: 400px) {
    justify-content: space-between;
  }
`

const HeadingText = styled(Typography)`
  font-weight: 600;
  color: ${({ theme }) => theme.palette.secondary.main};
  line-height: 1;
  @media (max-width: 400px) {
    font-size: 1.2rem;
  }
`

const RatingText = styled(Typography)`
  font-weight: 500;
  line-height: 1;
  color: ${({ theme }) => theme.palette.secondary.main};
`

export default Heading
