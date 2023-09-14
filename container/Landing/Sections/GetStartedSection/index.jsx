import styled from '@emotion/styled'
import React from 'react'
import GetStartedInputField from './components/GetStartedInputField'
import { Heading, SubHeading } from './style'

const GetStartedSection = () => {
  return (
    <Root>
      <Heading>
        Expand your Vision of
        <span>Knowledge Here</span>
      </Heading>
      <SubHeading>India’s Largest online Reading Platform</SubHeading>
      <GetStartedInputField />
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding-bottom: 160px;
  min-height: calc(100vh - 60px);
  font-size: 16px;
  @media (max-width: 900px) {
    font-size: 14px;
  }
  @media (max-width: 800px) {
    font-size: 12px;
  }
  @media (max-width: 650px) {
    font-size: 11px;
    gap: 25px;
  }
  @media (max-width: 555px) {
    font-size: 10px;
  }
  @media (max-width: 510px) {
    font-size: 9px;
    gap: 20px;
  }
  @media (max-width: 460px) {
    font-size: 8px;
  }
  @media (max-width: 410px) {
    font-size: 7.5px;
  }
  @media (max-width: 410px) {
    font-size: 7.5px;
  }
  @media (max-width: 380px) {
    font-size: 7px;
  }
  @media (max-width: 350px) {
    font-size: 6.5px;
  }
  @media (max-width: 321px) {
    font-size: 6px;
  }
`

export default GetStartedSection
