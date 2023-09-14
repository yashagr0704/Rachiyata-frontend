import styled from '@emotion/styled'
import { useSearchList } from 'api/global.hook'
import useExplore from 'Container/FeatureSection/api/explore.hook'
import { useRouter } from 'next/router'
import ContentCard from './components/ContentCard'

const ContentSection = ({ ranking, keyword }) => {
  const { query } = useRouter()
  const { ContentList, isLoading, isError, error } = useSearchList(keyword)

  if (isError) {
    return <h1>{error?.message}</h1>
  }

  // const List = [...(data?.data?.resources?.data || [])]
  console.log(ContentList)
  return (
    <Root>
      {ContentList?.map((item, index) => (
        <ContentCard key={index} item={item} index={index} ranking={ranking} />
      ))}
    </Root>
  )
}

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
