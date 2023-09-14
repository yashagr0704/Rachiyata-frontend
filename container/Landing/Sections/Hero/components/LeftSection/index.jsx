import styled from '@emotion/styled'
import Link from 'next/link'
import React from 'react'
import { ButtonContainer, Heading, ParagraphText, StyledButton, SubHeading, TextSection } from './styles'

const LeftSection = () => {
  const link = `/explore?content_type=novel&category=1&sort_by=Hot`
  return (
    <Root>
      <TextSection>
        <SubHeading>Online Book Reading Platform</SubHeading>
        <Heading>Expand your Vision of Knowledge Here</Heading>
        <ParagraphText>India’s Largest online Reading Platform</ParagraphText>
      </TextSection>
      <ButtonContainer>
        <Link href={link}>
          <StyledButton variant="contained">Explore</StyledButton>
        </Link>
        <Link href={`/create/dashboard/stories`}>
          <StyledButton variant="outlined">Create</StyledButton>
        </Link>
      </ButtonContainer>
    </Root>
  )
}

const Root = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  align-items: start;
  gap: 23px;
  width: 50%;
  padding-left: var(--main-side-spacing);
  @media (max-width: 1310px) {
    width: 55%;
  }
  @media (max-width: 1260px) {
    width: 60%;
  }
  @media (max-width: 900px) {
    width: 100%;
    height: calc(100vh - 150px);
    align-items: center;
    padding-left: 0px;
  }
  margin-top: -70px;
`

export default LeftSection
