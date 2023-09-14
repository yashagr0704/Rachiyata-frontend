import React from 'react'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'

import useBookDetail from 'Container/BookDetail/api/bookDetail.hook'
import { Typography } from '@mui/material'
import DividerBar from 'Container/ReadSection/components/DividerBar'

const DetailsSection = ({ item }, ref) => {
  const { query } = useRouter()
  const { BookDetail, isLoading, isError, error } = useBookDetail(query.bookId)

  return (
    <Root ref={ref}>
      <ImageContainer>
        <StyledImage
          alt="Cover Image"
          src={BookDetail?.cover_img && BookDetail?.cover_img.includes('http') ? BookDetail?.cover_img : '/alt-img.svg'}
        />
        <StyledImage
          className="blur"
          alt="Cover Image"
          src={BookDetail?.cover_img && BookDetail?.cover_img.includes('http') ? BookDetail?.cover_img : '/alt-img.svg'}
        />
      </ImageContainer>

      <InfoSection>
        <BookName variant="h4" component="div">
          {BookDetail?.book_name}
        </BookName>
        <AuthorName variant="h6" component="div">
          Author: <span className="name"> {BookDetail?.author_name} </span>
        </AuthorName>
      </InfoSection>
      <Copyright>
        <span className="symbol">©</span> E Book
      </Copyright>
      <DividerBar />
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 40px;
  margin-top: 20px;
`

const ImageContainer = styled.div`
  display: flex;
  height: 100%;
  position: relative;
  align-self: center;
  @media (max-width: 400px) {
    /* margin-top: 15px; */
  }
`

const StyledImage = styled.img`
  z-index: 2;
  &.blur {
    z-index: 1;
    position: absolute;
    /* filter: drop-shadow(8px 15px 20px ${({ theme }) => theme.palette.primary.main}44)  */
    filter: blur(20px) opacity(0.5);
    top: -5px;
    left: 0px;
  }
  max-width: 350px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;

  @media (max-width: 700px) {
    margin-bottom: 20px;
  }
`

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`

const BookName = styled(Typography)`
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.palette.secondary.main};
`

const AuthorName = styled(Typography)`
  text-align: center;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.secondary.main};
  .name {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`

const Copyright = styled(Typography)`
  text-align: center;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.secondary.main}aa;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 5px;

  .symbol {
    margin-bottom: -3px;
    font-size: 17.5px;
  }
  @media (max-width: 400px) {
    .symbol {
      margin-bottom: 0px;
      font-size: 18px;
    }
  }
`

export default React.forwardRef(DetailsSection)
