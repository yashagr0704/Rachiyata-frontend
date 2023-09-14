import styled from '@emotion/styled'
import React from 'react'

const bannerImg = 'https://res.cloudinary.com/dk6twrko6/image/upload/v1667379183/Rectangle_219_ulz5td.png'

const BannerSection = ({ text }) => {
  return (
    <Root>
      <Heading>{text}</Heading>
    </Root>
  )
}

const Root = styled.div`
  position: relative;
  height: 271px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 22px;
  overflow: hidden;
  background-image: url(${bannerImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-top: var(--main-side-spacing);
  margin-inline: var(--main-side-spacing);
  max-width: var(--main-max-width);
  width: calc(100% - var(--main-side-spacing) * 2);
  align-self: center;

  @media (max-width: 500px) {
    height: 220px;
  }

  @media (max-width: 400px) {
    height: 170px;
    width: calc(100%);
    border-radius: 0px;
    margin-top: 0px;
  }
`

const Heading = styled.div`
  color: #2f2d5c;
  font-size: 40px;
  font-weight: 700;

  @media (max-width: 500px) {
    font-size: calc(22px + 3vw);
  }
`

export default BannerSection
