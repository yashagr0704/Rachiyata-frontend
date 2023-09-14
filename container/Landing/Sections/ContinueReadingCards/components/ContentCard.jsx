import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'
import { useSelector } from 'react-redux'
import { Box, Button, ButtonBase, CircularProgress, Typography } from '@mui/material'

import { selectUser } from 'store/slices/global/user.slice'
import { useAddToLibraryAPI } from 'Container/BookDetail/api/bookDetail.hook'

import AddOutlinedIcon from '@mui/icons-material/AddOutlined'

const ContentCard = ({ item }) => {
  const { handleAddToLibrary } = useAddToLibraryAPI()
  const { isLoggedIn } = useSelector(selectUser)

  return (
    <Root>
      <Main>
        {isLoggedIn ? (
          <AddIcon color="primary" variant="contained" onClick={() => handleAddToLibrary(item.id)}>
            <AddOutlinedIcon />
          </AddIcon>
        ) : (
          <></>
        )}

        <Image
          alt="Cover Image"
          src={item?.cover_img && item?.cover_img.includes('http') ? item?.cover_img : '/alt-img.svg'}
        />

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
            <CircularProgressWithLabel value={item?.chapter_read_percent} />{' '}
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
  min-width: 260px;
`

const StyledButton = styled(ButtonBase)`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
  border-radius: 16px;
  background-color: transparent;
`

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const Image = styled.img`
  width: 100%;
  height: 285px;
  object-fit: cover;
  border-radius: 10px;
  aspect-ratio: 355/466;
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

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" thickness={6} {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Typography variant="caption" color="secondary" style={{ fontWeight: 600 }} component="div">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  )
}
