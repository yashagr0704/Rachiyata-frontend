import styled from '@emotion/styled'
import { Skeleton, Typography } from '@mui/material'
import useExplore from 'Container/FeatureSection/api/explore.hook'
import { useRouter } from 'next/router'
import ContentCard from './components/ContentCard'
import ClearAllRoundedIcon from '@mui/icons-material/ClearAllRounded'

const ContentSection = ({ ranking }) => {
  const { query } = useRouter()
  const { data, isLoading, isError, error } = useExplore({
    categoryId: query?.category,
    contentType: query?.content_type,
  })

  const List = data?.data?.resources?.data || []

  if (isError) {
    return <h1>{error?.message}</h1>
  }

  if (isLoading)
    return (
      <Root>
        <StyledSkeleton variant="rounded" height={160} />
        <StyledSkeleton variant="rounded" height={160} />
        <StyledSkeleton variant="rounded" height={160} />
        <StyledSkeleton variant="rounded" height={160} />
        <StyledSkeleton variant="rounded" height={160} />
      </Root>
    )

  if (List?.length === 0)
    return (
      <NotAvailableBar>
        <ClearAllRoundedIcon sx={{ fontSize: 90 }} color="primary" />
        <Typography variant="h5" component="div" textAlign="center" fontWeight={600} color="secondary">
          Content Not Available
        </Typography>
      </NotAvailableBar>
    )

  return (
    <Root>
      {List?.map((item, index) => (
        <ContentCard key={index} item={item} index={index} ranking={ranking} />
      ))}
    </Root>
  )
}

const NotAvailableBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 400px;
`

const StyledSkeleton = styled(Skeleton)`
  max-width: 550px;
  height: 184px;
  @media (max-width: 800px) {
    max-width: 100%;
  }
  @media (max-width: 465px) {
    height: 184px;
  }
  @media (max-width: 400px) {
    height: 168px;
  }
`

const Root = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  gap: 20px 10px;
  width: 100%;
  padding-top: 15px;
  padding-left: 15px;
  padding-bottom: 15px;
  padding-right: 15px;
  padding: 15px;
  @media (max-width: 800px) {
    padding: 0;
  }

  @media (max-width: 400px) {
    padding-top: 0px;
    margin-top: -5px;
  }
  isolation: isolate;
`

export default ContentSection
