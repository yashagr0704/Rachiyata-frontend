import React from 'react'
import styled from '@emotion/styled'
import StyledSlider from 'Components/StyledSlider'
import { Typography } from '@mui/material'
import { mainMaxWidth } from 'Container/Landing/common/styles'
import { mobileM, tablet } from 'styles/mediaQuery/breakPoints'
import ContentCard from './components/ContentCard'
import { ErrorBar, LoadingBar, NotAvailableBar } from 'Container/Landing/components/CardComponents'
import { usePotentialStartletList } from 'Container/Landing/api/landing.hooks'

const PotentialStarletCards = () => {
  const { List, isLoading, isError } = usePotentialStartletList()

  return (
    <Root>
      <Main>
        <Heading>Potential Starlet</Heading>
        {isLoading ? (
          <LoadingBar />
        ) : isError ? (
          <ErrorBar />
        ) : List.length === 0 ? (
          <NotAvailableBar />
        ) : (
          <StyledSlider CardComponent={ContentCard} List={List} />
        )}{' '}
      </Main>
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: 10px;
  width: 100%;
  height: 100%;
  @media ${mobileM} {
    min-height: 520px;
  }
`

const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-block: 10px;
  @media ${tablet} {
    padding-block: 40px;
  }
  gap: 10px;
  overflow: hidden;

  /* Styled Slider Settings ----- */
  --element-left-spacing: calc((100vw - var(--main-max-width)) / 2 + var(--main-side-spacing));
  @media (max-width: ${mainMaxWidth}px) {
    --element-left-spacing: var(--main-side-spacing);
  }
`

export const Heading = styled(Typography)`
  font-weight: 600;
  font-size: 25px;
  line-height: 29px;
  @media ${mobileM} {
    font-weight: 600;
    font-size: 25px;
    line-height: 29px;
  }
  color: ${props => props.theme.palette.secondary.main};
  padding-left: var(--element-left-spacing);
`

export default PotentialStarletCards
