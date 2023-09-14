import styled from '@emotion/styled'
import { Box } from '@mui/material'
import Image from 'next/image'
import { tabletS } from 'styles/mediaQuery/breakPoints'

export const BannerImgContainer = styled(Box)`
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;
  align-items: flex-start;
  width: 215px;
  display: none;
  @media ${tabletS} {
    display: block;
    display: flex;
  }
`

export const ImgContainer = styled(Box)`
  width: 218px;
  height: 253px;
  overflow: hidden;
  box-shadow: 4px 4px 9px 0rem rgb(81 34 192 / 28%);
  border-radius: 15px;
`

export const StyledImage = styled(Image)``