import React from 'react'
import styled from '@emotion/styled'

import { Button, ButtonBase, Rating, Typography, useMediaQuery } from '@mui/material'

import StarIcon from '@mui/icons-material/Star'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined'
import ArrowDropUpRoundedIcon from '@mui/icons-material/ArrowDropUpRounded'
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined'
import ModeCommentRoundedIcon from '@mui/icons-material/ModeCommentRounded'

import { cloudinary } from 'Container/Landing/Sections/NewArrivalsCards/components/ContentCard'
import Link from 'next/link'
import { useAddToLibraryAPI } from 'Container/BookDetail/api/bookDetail.hook'

const ContentCard = ({ item, index, ranking }) => {
  const isMobile = useMediaQuery('(max-width: 465px)')
  const { handleAddToLibrary } = useAddToLibraryAPI()

  return (
    <Root>
      <DeignsIcon />
      <Main>
        {ranking && (
          <RankingRoot>
            <RankingNumber variant="subtitle2">
              <RankingPlaceholder>{index + 1 <= 9 ? '0' : index + 1 <= 99 ? '0' : ''}</RankingPlaceholder>
              {index + 1}
            </RankingNumber>
          </RankingRoot>
        )}
        <Image
          alt="Cover Image"
          src={item?.cover_img && item?.cover_img.includes('http') ? item?.cover_img : '/alt-img.svg'}
        />
        <InfoSection>
          <HashtagList>
            {item?.tag?.map(tag => {
              return <Hashtag key={tag?.name}>#{tag?.name}</Hashtag>
            })}
          </HashtagList>

          <TitleName variant="subtitle2">
            {item?.book_name} <Status variant="caption">{item?.status}</Status>
          </TitleName>
          <ParagraphText variant="subtitle2" dangerouslySetInnerHTML={{ __html: item?.synopsis }}></ParagraphText>

          {!isMobile && (
            <InfoNav>
              {/* <RatingRoot>
                <Rating
                  color="primary"
                  sx={{ color: theme => theme.palette.primary.main }}
                  value={Number(item?.rating?.rate__avg).toFixed(1) || 0}
                  readOnly
                  precision={0.5}
                  emptyIcon={<StarIcon sx={{ color: theme => theme.palette.primary.main + '39' }} />}
                />
              </RatingRoot>
              <VoteCount variant="subtitle2">
                {item?.vote_count}
                <ArrowDropUpRoundedIcon
                  sx={{ color: theme => theme.palette.primary.main, fontSize: 42, mt: -1, mb: -1, ml: -1, mr: -1 }}
                />
              </VoteCount>
              <CommentCount variant="subtitle2">
                {item?.comment_count}
                <ModeCommentRoundedIcon
                  sx={{ color: theme => theme.palette.primary.main, fontSize: 17, ml: 0.7, mb: -0.15 }}
                />
              </CommentCount> */}
            </InfoNav>
          )}
        </InfoSection>
        <AddIcon variant="contained" onClick={() => handleAddToLibrary(item?.id)}>
          <AddOutlinedIcon />
        </AddIcon>
      </Main>
      {isMobile && (
        <InfoNav>
          <RatingRoot>
            <Rating
              color="primary"
              sx={{ color: theme => theme.palette.primary.main }}
              value={3.5}
              readOnly
              precision={0.5}
              emptyIcon={<StarIcon sx={{ color: theme => theme.palette.primary.main + '39' }} />}
            />
          </RatingRoot>
          <VoteCount variant="subtitle2">
            6
            <ArrowDropUpRoundedIcon
              sx={{ color: theme => theme.palette.primary.main, fontSize: 42, mt: -1, mb: -1, ml: -1, mr: -1 }}
            />
          </VoteCount>
          <CommentCount variant="subtitle2">
            6
            <ModeCommentRoundedIcon
              sx={{ color: theme => theme.palette.primary.main, fontSize: 17, ml: 0.7, mb: -0.15 }}
            />
          </CommentCount>
        </InfoNav>
      )}
      <Link href={`/book/${item?.id}`}>
        <a>
          <StyledButton color="primary" />
        </a>
      </Link>
    </Root>
  )
}

const Root = styled.div`
  position: relative;
  padding: 9px;
  border-radius: 16px;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  border: 1px solid transparent;
  border: 1px solid ${({ theme }) => theme.palette.primary.main}18;
  :hover {
    border: 1px solid ${({ theme }) => theme.palette.primary.main};
    box-shadow: 0px 7px 10px 1px rgba(0, 0, 0, 0.05);
    transform: scale(1.02);
  }
  max-width: 550px;
  overflow: hidden;
  @media (max-width: 800px) {
    max-width: 100%;
  }
  @media (max-width: 400px) {
    padding: 10px;
  }
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
  gap: 12px;
  height: 100px;
  @media (max-width: 465px) {
    height: 90px;
  }
  @media (max-width: 400px) {
    height: 90px;
  }
`

const Image = styled.img`
  object-fit: cover;
  border-radius: 7px;
  aspect-ratio: 350/466;
`

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  @media (max-width: 400px) {
    gap: 2px;
  }
`

const HashtagList = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`

const Hashtag = styled(Typography)`
  font-weight: 400;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.palette.primary.main};
`
const TitleName = styled(Typography)`
  font-weight: 600;
  color: ${({ theme }) => theme.palette.secondary.main};
  font-size: 1.15rem;
  display: flex;
  align-items: center;
  gap: 7px;
  @media (max-width: 400px) {
    font-size: 1.1rem;
  }
`

const ParagraphText = styled(Typography)`
  color: ${({ theme }) => theme.palette.secondary.main};
  && {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* number of lines to show */
    line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  @media (max-width: 400px) {
    letter-spacing: 0.15px;
    font-size: 0.69rem;
    line-height: 1.37;
    && {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 4; /* number of lines to show */
      line-clamp: 4;
      -webkit-box-orient: vertical;
    }
  }
`

const InfoNav = styled.div`
  margin-top: auto;
  margin-bottom: 2px;
  display: flex;
  gap: 14px;
  @media (max-width: 465px) {
    margin-top: 9px;
    margin-bottom: -3px;
  }

  @media (max-width: 400px) {
    margin-bottom: -1px;
  }
`

const RatingRoot = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  @media (max-width: 465px) {
    flex: 1;
    justify-content: flex-start;
  }
`

const VoteCount = styled(Typography)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 2px 2px 8px;
  border-radius: 6px;
  color: ${({ theme }) => theme.palette.primary.main};
  background: ${({ theme }) => theme.palette.primary.main}11;
`

const CommentCount = styled(Typography)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px 8px 3px 8px;
  border-radius: 6px;
  color: ${({ theme }) => theme.palette.primary.main};
  background: ${({ theme }) => theme.palette.primary.main}11;
`

const Status = styled(Typography)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0px 7px;
  border-radius: 13px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.palette.primary.main};
  color: #fff;
  background: ${({ theme }) => theme.palette.primary.main};
  font-weight: 400;
`

const DeignsIcon = styled(MenuBookOutlinedIcon)`
  color: ${({ theme }) => theme.palette.primary.main}11;
  font-size: 200px;
  position: absolute;
  top: -50px;
  right: -20px;
  transform: rotate(-45deg);
  @media (max-width: 465px) {
    font-size: 150px;
    color: ${({ theme }) => theme.palette.primary.main}09;
  }
`

const AddIcon = styled(Button)`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  position: absolute;
  top: 0px;
  right: 0px;
  border-radius: 13px;
  border-top-left-radius: 0px;
  border-bottom-right-radius: 0px;
  z-index: 10;
  padding: 0px;
  min-width: 34px;
  min-height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 7px 10px 1px rgba(0, 0, 0, 0.15);
  @media (max-width: 400px) {
    min-width: 30px;
    min-height: 30px;
    .MuiSvgIcon-root {
      font-size: 1.2rem;
    }
  }
`

const RankingRoot = styled.div`
  height: 100%;
  background: ${({ theme }) => theme.palette.primary.main};
  background: linear-gradient(141deg, rgba(81, 34, 192, 1) 0%, #966afc 100%);
  width: 180px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  padding: 5px 10px;
  width: fit-content;
  height: fit-content;
  bottom: 5px;
  left: 5px;
  @media (max-width: 465px) {
    bottom: 40px;
    border-radius: 9px;

    padding: 5px 6px;
  }
`

const RankingNumber = styled(Typography)`
  color: #fff;
  font-weight: 700;
  font-size: 2.5rem;
  text-align: center;
  letter-spacing: 2px;
  margin-right: -2px;
  line-height: 1;
  @media (max-width: 465px) {
    font-size: 1.9rem;
    margin-bottom: -1px;
    letter-spacing: 2px;
  }
`

const RankingPlaceholder = styled(Typography)`
  display: inline;
  color: #fff;
  -webkit-text-stroke: 1px #fff;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 1;
  @media (max-width: 465px) {
    font-size: 1.9rem;
  }
`

export default ContentCard
