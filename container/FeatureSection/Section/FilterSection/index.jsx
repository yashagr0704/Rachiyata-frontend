import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import React from 'react'
import StyledChip from './components/StyledChip'

const List = [
  {
    label: 'Hot',
  },
  {
    label: 'Trending',
  },
  {
    label: 'Newest',
  },
  {
    label: 'Oldest',
  },
]

const FilterSection = () => {
  return (
    <Root>
      <Heading variant="h6" component="div">
        Sort By
      </Heading>
      <Main>
        {List.map((item, index) => (
          <StyledChip item={item} key={index} />
        ))}
      </Main>
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px;
  padding-right: 0px;
  @media (max-width: 800px) {
    padding-left: 0px;
    padding-top: 15px;
  }

  @media (max-width: 400px) {
    padding-top: 5px;
    padding-bottom: 15px;
  }
`

const Main = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  @media (max-width: 415px) {
    justify-content: flex-end;
    margin-left: auto;
  }
`

const Heading = styled(Typography)`
  margin-right: auto;
  font-weight: 700;
  background: #fff;
  white-space: nowrap;
  box-shadow: 5px 0px 20px 20px #ffffff9e;
  z-index: 1;
  @media (max-width: 415px) {
    display: none;
  }
`

export default FilterSection
