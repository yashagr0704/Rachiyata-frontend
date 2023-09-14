import React from 'react'
import { useRouter } from 'next/router'

import { RootContainer, MainContainer } from '../common/styles'

import RecommendationSection from '../Section/RecommendationSection'
import DetailsSection from '../Section/DetailsSection'
import ReviewSection from '../Section/ReviewSection'
import CommentSection from '../Section/CommentSection'

import usePoemDetail from '../api/poemDetail.hook'
import VoteSection from '../Section/VoteSection'

const PoemDetail = () => {
  const router = useRouter()
  const { PoemDetail, isLoading, isError, error } = usePoemDetail(router.query.poemId)

  if (isError) {
    return <h1>{error?.message}</h1>
  }

  return (
    <RootContainer>
      <MainContainer>
        <DetailsSection item={PoemDetail} isLoading={isLoading} />
        <RecommendationSection />
        <VoteSection item={PoemDetail} isLoading={isLoading} />
        <ReviewSection item={PoemDetail} isLoading={isLoading} />
        <CommentSection item={PoemDetail} isLoading={isLoading} />

        {/* <ReviewSectionCom /> */}
      </MainContainer>
    </RootContainer>
  )
}

export default PoemDetail
