import React from 'react'
import Banner from '../Sections/Banner'
import { RootContainer } from '../common/styles'
import WeeklyFeatured from '../Sections/WeeklyFeatured'
import PotentialStarletCards from '../Sections/PotentialStarletCards'
import NewArrivalsCards from '../Sections/NewArrivalsCards/index'
import Header from '../Sections/Header'
import GetStartedSection from '../Sections/GetStartedSection'

const LandingPageWithoutLogin = () => {
  return (
    <RootContainer>
      <Header />
      <GetStartedSection />
      <Banner />
      <WeeklyFeatured />
      <PotentialStarletCards />
      <NewArrivalsCards />
    </RootContainer>
  )
}

export default LandingPageWithoutLogin
