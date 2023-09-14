import React from 'react'
import { useRouter } from 'next/router'

import { RootContainer, MainContainer } from '../common/styles'

import RecommendationSection from '../Section/RecommendationSection'
import DetailsSection from '../Section/DetailsSection'
import ReviewSection from '../Section/ReviewSection'
import CommentSection from '../Section/CommentSection'

import useBookDetail from '../api/bookDetail.hook'
import VoteSection from '../Section/VoteSection'

const BookDetail = () => {
  const router = useRouter()
  const { BookDetail, isLoading, isError, error } = useBookDetail(router.query.bookId)

  if (isError) {
    return <h1>{error?.message}</h1>
  }

  return (
    <RootContainer>
      <MainContainer>
        <DetailsSection item={BookDetail} isLoading={isLoading} />
        <RecommendationSection />
        <VoteSection item={BookDetail} isLoading={isLoading} />
        <ReviewSection item={BookDetail} isLoading={isLoading} />
        <CommentSection item={BookDetail} isLoading={isLoading} />

        {/* <ReviewSectionCom /> */}
      </MainContainer>
    </RootContainer>
  )
}

export default BookDetail
