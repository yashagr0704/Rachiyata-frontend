import React from 'react'
import AvailableLeadsSection from './components/AvailableLeadsSection'
import DownloadBookSection from './components/DownloadBookSection'
import MobileVersionSection from './components/MobileVersionSection'

const Banner = () => {
  return (
    <>
      <DownloadBookSection />
      <MobileVersionSection />
      <AvailableLeadsSection />
    </>
  )
}

export default Banner
