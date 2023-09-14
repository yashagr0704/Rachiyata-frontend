import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from 'store/slices/global/user.slice'
import { laptopS } from 'styles/mediaQuery/breakPoints'

const ContentCard = ({ item }) => {
  const { isLoggedIn } = useSelector(selectUser)
  return (
    <Link href={isLoggedIn ? `/book/${item?.id}` : `/login`}>
      <Root>
        <ImageSection>
          <StyledImage
            alt="Cover Image"
            src={item?.cover_img && item?.cover_img.includes('http') ? item?.cover_img : '/alt-img.svg'}
            width="90px"
            height="115px"
          />
        </ImageSection>
        <InfoSection>
          <Title>{item?.book_name}</Title>

          {item?.category?.map((cat, idx) => (
            <Fantasy key={idx}>{cat?.name}</Fantasy>
          ))}

          <Rating>{Number(item?.rating?.rate__avg).toFixed(1)}</Rating>
        </InfoSection>
      </Root>
    </Link>
  )
}

const Root = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media ${laptopS} {
    gap: 48px;
  }
  border-radius: 13px;
  gap: 18px;
  width: 100%;
  padding: 8px 9px;

  border: 2px solid transparent;
  transition: 0.3s ease-in-out;
  &:hover {
    border: 2px solid ${({ theme }) => theme.palette.primary.main};
    box-shadow: 0px 7px 10px 1px rgba(0, 0, 0, 0.05);
    transform: scale(1.05);
  }
`

const ImageSection = styled.div`
  width: fit-content;
  height: 115px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledImage = styled.img`
  border-radius: 8px;
`

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 70%;
  padding: 0px 0px;
  gap: 4px;
  text-align: left;
`

const Title = styled(Typography)`
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.palette.secondary.main};
`

const Fantasy = styled(Typography)`
  font-weight: 500;
  font-size: 13px;
  color: ${({ theme }) => theme.palette.secondary.main}78;
`

const Rating = styled(Typography)`
  font-weight: 600;
  font-size: 21px;
  color: #148544;
`

export default ContentCard
