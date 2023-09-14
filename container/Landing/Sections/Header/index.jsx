import React from 'react'
import styled from '@emotion/styled'

import LogoBox from './components/LogoBox'
import SignInButton from './components/SignInButton'
import SelectLanguage from './components/SelectLanguage'
// import { mainMaxWidth } from 'Container/Landing/common/styles'
import { useMediaQuery } from '@mui/material'

const Header = () => {
  const isMobile327sx = useMediaQuery('(max-width: 327px)')

  return (
    <Root>
      <LogoBox />
      <NavSection>
        <SelectLanguage />
        {!isMobile327sx && <SignInButton />}
      </NavSection>
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 10px;
  padding-block: 35px;
  padding-inline: var(--main-side-spacing);
  width: 100%;
  max-width: var(--main-max-width);
  @media (max-width: 1000px) {
    padding-block: 25px;
  }
  @media (max-width: 405px) {
    padding-block: 20px;
  }
  @media (max-width: 327px) {
    /* align-items: flex-start; */
  }
`

const NavSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  @media (max-width: 405px) {
    gap: 10px;
  }
  @media (max-width: 359px) {
    gap: 8px;
  }
  @media (max-width: 327px) {
    /* flex-direction: column; */
    /* align-items: flex-end; */
  }
`

export default Header
