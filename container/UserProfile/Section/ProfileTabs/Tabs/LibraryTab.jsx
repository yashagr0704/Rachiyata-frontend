import styled from '@emotion/styled'
import { Skeleton } from '@mui/material'
import { useLibraryAPI } from 'Container/UserProfile/api/userProfile.hook'
import React from 'react'
import ContentCard from '../components/ContentCard'

const LibraryTab = () => {
  const { ContentList, isLoading } = useLibraryAPI()

  if (isLoading)
    return (
      <Root>
        <StyledSkeleton variant="rounded" />
        <StyledSkeleton variant="rounded" />
        <StyledSkeleton variant="rounded" />
        <StyledSkeleton variant="rounded" />
        <StyledSkeleton variant="rounded" />
        <StyledSkeleton variant="rounded" />
        <StyledSkeleton variant="rounded" />
        <StyledSkeleton variant="rounded" />
      </Root>
    )

  return (
    <Root>
      {ContentList?.map(item => (
        <ContentCard key={item.id} item={item} />
      ))}
    </Root>
  )
}

const StyledSkeleton = styled(Skeleton)`
  height: 238px;
  max-width: 158px;
  width: 158px;

  @media (max-width: 730px) {
    width: 100%;
    max-width: 100%;
    height: 238px;
  }
`

const Root = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;

  @media (max-width: 730px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 13px;
  }
  @media (max-width: 540px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 13px;
  }

  @media (max-width: 400px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-gap: 13px;
  }
`

export default LibraryTab
