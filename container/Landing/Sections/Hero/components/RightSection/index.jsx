import styled from '@emotion/styled'
import Image from 'next/image'
import React from 'react'
import { useHero } from '../../api/hero.hook'
import { BannerImgContainer, ImgContainer, StyledImage } from './styles'

const RightSection = () => {
  const { data } = useHero()

  const List = [...(data || []), ...(data || [])]

  return (
    <Root>
      <BannerImgContainer sx={{ margin: '0px 0px -131px 0px' }}>
        {List?.map((bannerImg, index) => (
          <ImgContainer key={index}>
            <StyledImage src={bannerImg.cover_img} width="218px" height="253px" />
          </ImgContainer>
        ))}
      </BannerImgContainer>
      <BannerImgContainer sx={{ margin: '-56px 0px 0px 0px' }}>
        {List?.map((bannerImg, index) => (
          <ImgContainer key={index}>
            <StyledImage src={bannerImg.cover_img} width="218px" height="253px" />
          </ImgContainer>
        ))}
      </BannerImgContainer>
      <BannerImgContainer sx={{ margin: '45px 0px 0px 0px' }}>
        {List?.map((bannerImg, index) => (
          <ImgContainer key={index}>
            <StyledImage src={bannerImg.cover_img} width="218px" height="253px" />
          </ImgContainer>
        ))}
      </BannerImgContainer>
      <BannerImgContainer sx={{ margin: '-169px 0px 0px 0px' }}>
        {List?.map((bannerImg, index) => (
          <ImgContainer key={index}>
            <StyledImage src={bannerImg.cover_img} width="218px" height="253px" />
          </ImgContainer>
        ))}
      </BannerImgContainer>
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  width: 50%;
  @media (max-width: 1310px) {
    width: 40%;
  }
  @media (max-width: 1169px) {
    height: 100%;
  }
`

export default RightSection
