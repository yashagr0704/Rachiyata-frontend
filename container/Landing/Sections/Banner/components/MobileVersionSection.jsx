import React from 'react'
import TextSection from './TextSection'
import styled from '@emotion/styled'
import { useMediaQuery } from '@mui/material'

const MobileVersionSection = () => {
  const is600x = useMediaQuery('(min-width: 600px)')

  const banner1 = 'https://res.cloudinary.com/dk6twrko6/image/upload/v1668677838/Banner2_bymfre.svg'
  return (
    <Root>
      <Main>
        <TextSection
          color="white"
          heading={
            <>
              Mobile Version is{" "}
              {is600x && <br />}
              also available in playstore.
            </>
          }
          subHeading={
            <>
              Read unlimited stories, poems & shayeris{" "}
              {is600x && <br />}
              in your phone, tablet, laptop, and TV.
            </>
          }
        />
        <ShowSection>
          <Image alt="Illustration" src={banner1} />
        </ShowSection>
      </Main>
    </Root>
  )
}

const Root = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-block: 50px;
  background: ${({ theme }) => theme.palette.primary.main};
  overflow: hidden;
`

const Main = styled.div`
  width: 100%;
  max-width: var(--main-max-width);
  padding-inline: var(--main-side-spacing);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0px;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 50px;
  }
`

const ShowSection = styled.div`
  position: relative;
  @media (max-width: 1210px) {
  }
  max-width: 40%;
  @media (max-width: 900px) {
    max-width: 70%;
  }
  @media (max-width: 630px) {
    max-width: 90%;
  }
`

const Image = styled.img`
  width: 130%;
  height: auto;
  @media (max-width: 1210px) {
  }
  margin-top: -25%;
  margin-left: -20%;
  @media (max-width: 610px) {
    margin-left: -21%;
  }
`

export default MobileVersionSection
