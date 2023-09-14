import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'
import { useSelector } from 'react-redux'
import { Button, ButtonBase, Typography } from '@mui/material'

import { selectUser } from 'store/slices/global/user.slice'
import { useAddToLibraryAPI } from 'Container/BookDetail/api/bookDetail.hook'

import AddOutlinedIcon from '@mui/icons-material/AddOutlined'

export const cloudinary = '/book_image.jpg'

const ContentCard = ({ item }) => {
  const { handleAddToLibrary } = useAddToLibraryAPI()
  const { isLoggedIn } = useSelector(selectUser)

  return (
    <Root>
      <Main>
        {isLoggedIn ? (
          <AddIcon
            disable={Boolean(item?.library_added)}
            color="primary"
            variant="contained"
            onClick={() => handleAddToLibrary(item.id)}>
            <AddOutlinedIcon />
          </AddIcon>
        ) : (
          <></>
        )}
        <ImageSection>
          <Image
            alt="Cover Image"
            src={item?.cover_img && item?.cover_img.includes('http') ? item?.cover_img : '/alt-img.svg'}
          />
          <SmallImageList>
            <SmallImage
              alt="Cover Image"
              src={item?.cover_img2 && item?.cover_img2.includes('http') ? item?.cover_img2 : '/alt-img.svg'}
            />
            <SmallImage
              alt="Cover Image"
              src={item?.cover_img3 && item?.cover_img3.includes('http') ? item?.cover_img3 : '/alt-img.svg'}
            />
            <SmallImage
              alt="Cover Image"
              src={item?.cover_img4 && item?.cover_img4.includes('http') ? item?.cover_img4 : '/alt-img.svg'}
            />
          </SmallImageList>
        </ImageSection>

        <InfoSection>
          <InfoLeft>
            <TitleName variant="h6" component="div">
              {item?.book_name}
            </TitleName>
            <CategoryName variant="subtitle2">
              {item?.category?.category?.map(({ name }) => name).join(', ') || 'N/A'}
            </CategoryName>
          </InfoLeft>
          <InfoRight>
            <Rating variant="subtitle2">{Number(item?.rating?.rate__avg).toFixed(1) || 'N/A'}</Rating>
          </InfoRight>
        </InfoSection>
      </Main>
      <Link href={isLoggedIn ? `/book/${item.id}` : `/login`}>
        <a>
          <StyledButton color="primary" />
        </a>
      </Link>
    </Root>
  )
}

export default ContentCard

const Root = styled.div`
  position: relative;
  padding: 15px;
  box-shadow: 3px 3px 21px 1px rgba(98, 0, 255, 0.1);
  border-radius: 18px;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  border: 2px solid transparent;
  :hover {
    border: 2px solid ${({ theme }) => theme.palette.primary.main};
    box-shadow: 0px 7px 10px 1px rgba(0, 0, 0, 0.05);
    transform: scale(1.02);
  }
  min-width: 324px;
`

const StyledButton = styled(ButtonBase)`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
  border-radius: 18px;
  background-color: transparent;
`

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const ImageSection = styled.div`
  display: flex;
  gap: 10px;
  width: fit-content;
`

const Image = styled.img`
  width: 100%;
  height: 285px;
  object-fit: cover;
  border-radius: 10px;
  aspect-ratio: 355/466;
`

const SmallImageList = styled.div`
  display: flex;
  flex-direction: column;
  height: 285px;
  width: 66px;
  gap: 10px;
`

const SmallImage = styled.img`
  height: 100%;
  object-fit: cover;
  border-radius: 6px;
  aspect-ratio: 355/476;
  border: 0px;
`

const InfoSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const InfoLeft = styled.div`
  display: flex;
  flex-direction: column;
`

const InfoRight = styled.div`
  display: flex;
  flex-direction: column;
`

const TitleName = styled(Typography)`
  font-weight: 700;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.palette.secondary.main};
`

const CategoryName = styled(Typography)`
  font-weight: 500;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.palette.secondary.main}aa;
`

const Rating = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.main};
  font-weight: 600;
  font-size: 1.2rem;
`

const AddIcon = styled(Button)`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  position: absolute;
  top: 0px;
  right: 0px;
  border-top-right-radius: 16px;
  border-bottom-left-radius: 16px;
  border-top-left-radius: 0px;
  border-bottom-right-radius: 0px;
  z-index: 10;
  padding: 0px;
  min-width: 35px;
  min-height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
`