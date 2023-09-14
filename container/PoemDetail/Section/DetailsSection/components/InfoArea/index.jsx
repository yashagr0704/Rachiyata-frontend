import styled from '@emotion/styled'
import { Button, Rating, Typography } from '@mui/material'
import React from 'react'
import StyledChip from './StyledChip'
import CollectionsBookmarkRoundedIcon from '@mui/icons-material/CollectionsBookmarkRounded'
import RemoveRedEyeRoundedIcon from '@mui/icons-material/RemoveRedEyeRounded'
import StarIcon from '@mui/icons-material/Star'
import LibraryAddRoundedIcon from '@mui/icons-material/LibraryAddRounded'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import MoreOptions from './MoreOptions'
import { useRouter } from 'next/router'
import { useAddToLibraryAPI, useLikePoemAPI } from 'Container/PoemDetail/api/poemDetail.hook'
import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded'

const InfoArea = ({ item }) => {
  const { query } = useRouter()
  const { handleAddToLibrary } = useAddToLibraryAPI()
  const { handleLikePoem } = useLikePoemAPI({
    poemId: item?.id,
  })

  return (
    <Root>
      <PoemName variant="h3" component="div">
        {item?.poem_name}
      </PoemName>
      <InfoChipList>
        {item?.category?.map(({ name, id }) => (
          <StyledChip label={name} key={id} />
        ))}
        <StyledChip label={`${item?.chapter_count} Chapters`} Icon={CollectionsBookmarkRoundedIcon} />
        <StyledChip label={`${item?.view_count} Views`} Icon={RemoveRedEyeRoundedIcon} />
      </InfoChipList>
      <Author color="secondary">
        Author: <b>{item?.author_name}</b>
      </Author>
      <RatingRoot>
        <Rating
          color="primary"
          sx={{ color: theme => theme.palette.primary.main }}
          value={Number(item?.rating?.rate__avg).toFixed(1)}
          readOnly
          size="large"
          precision={0.1}
          emptyIcon={<StarIcon fontSize="inherit" sx={{ color: theme => theme.palette.primary.main + '39' }} />}
        />
        {<TotalRating color="secondary" variant="subtitle2">{`(${item?.rating?.rate__count})`}</TotalRating>}
      </RatingRoot>
      <ButtonList>
        <a href={`/poem/${query?.poemId}/read/${item?.chapter[0]?.id}`} target="_blank" rel="noopener noreferrer">
          <Button variant="contained" endIcon={<ArrowForwardRoundedIcon />}>
            Read
          </Button>
        </a>
        <Button variant="contained" sx={{ minWidth: 40, width: 40 }} onClick={() => handleAddToLibrary(item?.id)}>
          <LibraryAddRoundedIcon fontSize="small" />
        </Button>
        <Button variant="contained" onClick={handleLikePoem} startIcon={<ThumbUpRoundedIcon />}>
          {item?.like_count}
        </Button>
        <MoreOptions />
      </ButtonList>
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media (max-width: 800px) {
    gap: 20px;
  }
`

const PoemName = styled(Typography)`
  font-weight: 600;
  color: ${({ theme }) => theme.palette.secondary.main};
`

const InfoChipList = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`

const Author = styled(Typography)`
  margin-top: 4px;
`

const RatingRoot = styled.div`
  display: flex;
  gap: 5px;
`

const TotalRating = styled(Typography)``

const ButtonList = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 5px;
`

export default InfoArea
