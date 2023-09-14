import styled from '@emotion/styled'
import { NotAvailableBar } from 'Container/Landing/components/CardComponents'
import React from 'react'
import ContentCard from './ContentCard'
import ClearAllRoundedIcon from '@mui/icons-material/ClearAllRounded'
import { Skeleton } from '@mui/material'

const ContentListSection = ({ contentName, contentList, isLoading }) => {
  if (isLoading)
    return (
      <Root>
        <ContentName>{contentName}</ContentName>
        <StyledSkeleton variant="rounded" height={125} />
        <StyledSkeleton variant="rounded" height={125} />
        <StyledSkeleton variant="rounded" height={125} />
        <StyledSkeleton variant="rounded" height={125} />
        <StyledSkeleton variant="rounded" height={125} />
      </Root>
    )

  return (
    <Root>
      <ContentName>{contentName}</ContentName>
      {contentList?.length === 0 && <NotAvailableBar Icon={ClearAllRoundedIcon} text="Collections not available" />}
      {contentList?.map(item => (
        <ContentCard key={item.id} item={item} />
      ))}
    </Root>
  )
}

const StyledSkeleton = styled(Skeleton)`
  width: 100%;
  max-width: 650px;
  @media (max-width: 900px) {
    width: 68vw;
  }
`

const Root = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  width: 33%;
  height: 100%;
  @media (max-width: 900px) {
    width: 100%;
  }
`

const ContentName = styled.div`
  font-weight: 600;
  font-size: 27px;
  color: ${({ theme }) => theme.palette.secondary.main};
  line-height: 3;
`

export default ContentListSection
