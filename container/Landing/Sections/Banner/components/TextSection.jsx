import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import React from 'react'

const TextSection = ({ color, heading, subHeading }) => {
  return (
    <Root color={color}>
      <Heading>{heading}</Heading>
      <SubHeading>{subHeading}</SubHeading>
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;
  color: ${({ color, theme }) => (color === 'secondary' ? theme.palette.secondary.main : 'white')};
  font-size: 19px;
  @media (max-width: 1560px) {
    font-size: 17px;
  }
  @media (max-width: 1480px) {
    font-size: 15px;
  }
  @media (max-width: 1280px) {
    font-size: 13px;
  }
  @media (max-width: 1280px) {
    font-size: 13px;
  }
  @media (max-width: 1210px) {
    font-size: 12px;
  }
  @media (max-width: 630px) {
    font-size: 11px;
  }
  @media (max-width: 580px) {
    font-size: 10px;
    padding-inline: 15px;
  }
  @media (max-width: 900px) {
    text-align: center;
  }
  @media (max-width: 340px) {
    font-size: 9px;
  }
  @media (max-width: 320px) {
    font-size: 8px;
  }
`

const Heading = styled(Typography)`
  font-size: 3.5em;
  font-weight: 800;
  line-height: 1.35;
`
const SubHeading = styled(Typography)`
  font-size: 1.5em;
  font-weight: 300;
`

export default TextSection
