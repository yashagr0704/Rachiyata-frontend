import React from 'react'
import PlanCard from './components/PlanCard'
import CardMembershipRoundedIcon from '@mui/icons-material/CardMembershipRounded'
import TollRoundedIcon from '@mui/icons-material/TollRounded'
import styled from '@emotion/styled'

const CoinPlan = () => {
  return (
    <Root>
      <PlanCard
        Icon={TollRoundedIcon}
        name="10 Coins"
        description="Did you receive an email or text (SMS) requesting your Netflix account email, phone number, password, or Coin method? If so, it probably did not come from us. Here are some tips to identify and handle a suspicious email or text and keep your account safe."
        heightLight="₹90"
      />
      <PlanCard
        Icon={TollRoundedIcon}
        name="50 Coins"
        description="Did you receive an email or text (SMS) requesting your Netflix account email, phone number, password, or Coin method? If so, it probably did not come from us. Here are some tips to identify and handle a suspicious email or text and keep your account safe."
        heightLight="₹489"
      />
      <PlanCard
        Icon={TollRoundedIcon}
        name="100 Coins"
        description="Did you receive an email or text (SMS) requesting your Netflix account email, phone number, password, or Coin method? If so, it probably did not come from us. Here are some tips to identify and handle a suspicious email or text and keep your account safe."
        heightLight="₹969"
      />
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 30px;
  max-width: var(--main-max-width);
  height: 100%;
  overflow-x: scroll;
  padding: 30px;
  padding-left: 23px;
  padding-bottom: 40px;
`

export default CoinPlan
