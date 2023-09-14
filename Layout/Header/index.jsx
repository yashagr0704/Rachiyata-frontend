import React from 'react'
import styled from '@emotion/styled'
import { AppBar, IconButton, Toolbar, useMediaQuery } from '@mui/material'
import { NavPageLinks } from '../config.layout'

import LogoBox from './components/LogoBox'
import ProfileButton from './components/ProfileButton'
import StyledNavButton from './components/StyledNavButton'
import StyledSearchBox from './components/StyledSearchBox'

import MenuOpenIcon from '@mui/icons-material/MenuOpen'

const Header = ({ handleSidebarOpen }) => {
  const isTabletXSM = useMediaQuery('(min-width:900px)')

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: '4px 4px 17px #864dff1f',
          backdropFilter: 'blur(66px)',
          borderBottom: theme => '0px solid' + theme.palette.primary.main + '23',
          background: '#ffffffd9',
        }}>
        <Toolbar>
          <LogoBox />
          <Toolbar style={{ marginLeft: 'auto', paddingInline: '0px' }}>
            <StyledSearchBox />
            {isTabletXSM && (
              <NavButtonWarper>
                {NavPageLinks.map((Item, index) => (
                  <StyledNavButton key={index} {...Item} Icon={Item.Icon} />
                ))}
              </NavButtonWarper>
            )}
          </Toolbar>
          {isTabletXSM ? (
            <ProfileButton />
          ) : (
            <StyledSidebarButton
              color="primary"
              onClick={handleSidebarOpen}
              edge="start"
              sx={{
                transition: '.2s ease-in-out',
              }}>
              <MenuOpenIcon style={{ fontSize: 25 }} />
            </StyledSidebarButton>
          )}
        </Toolbar>
      </AppBar>{' '}
    </>
  )
}

const Root = styled.div`
  display: flex;
  justify-content: space-between;
`

const NavButtonWarper = styled.div`
  display: flex;
  gap: 1px;
  margin-right: 10px;
  margin-left: 15px;
`

const StyledSidebarButton = styled(IconButton)``

export default Header
