import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import React from 'react'
import { Root } from '../common/styles'
import PaymentPlan from '../section/PaymentPlan'

const PaymentPlanPage = () => {
  return (
    <Root>
      <Main>
        <TextSection>
          <Heading variant="h3" component="div" color="primary">
            Chose Your Plan
          </Heading>
          <Description variant="subtitle2" color="secondary">
            Chose your plane from available options Global warming, zombies, nuclear war, all at once. Just one tipping
            point and the world itself would crumble.
          </Description>
        </TextSection>
        <PaymentPlan />
      </Main>
    </Root>
  )
}

const Main = styled.div`
  width: 100%;
  max-width: var(--main-max-width);
  padding-top: 50px;
  display: flex;
  flex-direction: column;
`

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  max-width: var(--main-max-width);
  padding: 20px;
`

const Heading = styled(Typography)`
  font-weight: 600;
  color: ${({ theme }) => theme.palette.primary.main};
`

const Description = styled(Typography)`
  color: ${({ theme }) => theme.palette.secondary.main}d9;
  font-size: 1rem;
  line-height: 1.7;
`

export default PaymentPlanPage
