import styled from '@emotion/styled'
import { Skeleton, useMediaQuery } from '@mui/material'
import React from 'react'
import CreateReviewSection from './components/CreateReviewSection'
import Heading from './components/Heading'
import RatingSection from './components/RatingSection'

const ReviewSection = ({ item, isLoading }) => {
  const isTablet = useMediaQuery('(max-width: 735px)')

  if (isLoading)
    return (
      <Root>
        <StyledDivider />
        <Body>
          <StyledSkeletonHr variant="rounded" />

          {isTablet && <StyledDivider />}
          <StyledSkeletonCr variant="rounded" />
        </Body>
        <StyledDivider />
      </Root>
    )

  return (
    <Root>
      <StyledDivider />
      <Body>
        <Main>
          <Heading item={item} />
          <RatingSection item={item} />
        </Main>
        {isTablet && <StyledDivider />}
        <CreateReviewSection poemId={item?.id} />
      </Body>
      <StyledDivider />
    </Root>
  )
}

const StyledSkeletonHr = styled(Skeleton)`
  min-height: 184px;
  width: 100%;
  max-width: 100%;
  @media (max-width: 780px) {
    min-height: 178px;
  }
`

const StyledSkeletonCr = styled(Skeleton)`
  min-height: 104px;

  width: 100%;
  max-width: 100%;
  @media (max-width: 780px) {
    width: 100%;
    max-width: 100%;
  }
`

const Root = styled.div`
  width: 100%;
  gap: 30px;
  margin-inline: var(--main-side-spacing);
  max-width: var(--main-max-width);
  width: calc(100% - var(--main-side-spacing) * 2);
  align-self: center;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`
const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 735px) {
    flex-direction: column;
  }
`
const Body = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  @media (max-width: 735px) {
    align-items: stretch;
    flex-direction: column;
  }
`

const StyledDivider = styled.div`
  height: 1px;
  width: 100%;
  margin-top: 15px;
  margin-bottom: 15px;
  background-color: ${({ theme }) => theme.palette.primary.main}18;
  align-self: center;
`

export default ReviewSection
