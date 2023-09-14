import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { NavPageLinks } from 'Layout/config.layout'
import { IconButton, List, Drawer } from '@mui/material'
import { Toolbar, useTheme, useMediaQuery } from '@mui/material'

import StyledNavButton from './components/StyledNavButton'

// Icons ---
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded'
import { useCallback } from 'react'
import ProfileButton from './components/ProfileButton'
import LogoBox from './components/LogoBox'
import Background from './components/Background'
import LogoutButton from './components/LogoutButton'
// ---

const SideBar = ({ isOpen, setIsOpen }) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const { pathname } = useRouter()

  const handleSideBarClose = useCallback(() => {
    setIsOpen(false)
  }, [setIsOpen])

  const DrawerProps = {
    onClose: handleSideBarClose,
    open: isOpen,
    variant: 'temperary',
    anchor: 'right',
    BackdropProps,
    sx: DrawerSx(isMobile, pathname),
  }

  return (
    <Drawer {...DrawerProps}>
      <Background />
      <HeaderBar {...{ isMobile, handleSideBarClose }} />
      <Main>
        <ProfileButton />
        <NavButtonWarper>
          {NavPageLinks.map((Item, index) => (
            <StyledNavButton key={index} {...Item} Icon={Item.Icon} />
          ))}
          <Divider />
          <LogoutButton setIsOpen={setIsOpen} />
        </NavButtonWarper>
      </Main>
    </Drawer>
  )
}

export default SideBar

const Main = styled(List)`
  margin-top: 0;
  padding-top: 5px;
`

const NavButtonWarper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-right: 10px;
  margin-left: 15px;
  margin-top: 15px;
`

const Divider = styled.div`
  margin-top: 13px;
  margin-bottom: 13px;
  height: 2px;
  background: ${({ theme }) => theme.palette.primary.main}1f;
`
const DrawerSx = (isMobile, pathname) => {
  return {
    width: theme => theme.mixins.drawer?.width,
    flexShrink: 0,
    position: 'relative',
    [`& .MuiDrawer-paper`]: {
      width: theme => theme.mixins.drawer?.width,
      boxSizing: 'border-box',
      boxShadow: '4px 4px 17px #864dff1f',
      backdropFilter: 'blur(40px)',
      background: '#ffffffd6',
      borderWidth: '0px',
      overflow: 'hidden',
    },
  }
}

const BackdropProps = {
  sx: {
    background: 'rgba(0,0,0,0.3)',
    backdropFilter: 'blur(4px)',
  },
}

const HeaderBar = ({ isMobile, handleSideBarClose }) => {
  return (
    <RootHeaderBar>
      <LogoBox />
      <IconButton color="primary" sx={{ marginLeft: 'auto' }} onClick={handleSideBarClose}>
        <ChevronLeftRoundedIcon style={{ fontSize: 40 }} />
      </IconButton>
    </RootHeaderBar>
  )
}
const RootHeaderBar = styled(Toolbar)`
  display: flex;
  align-items: center;
  margin-top: 10px;
  && {
    padding-left: 25px;
    padding-right: 8px;
  }
`
