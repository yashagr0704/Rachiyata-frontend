import React, { useCallback, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from 'store/slices/global/user.slice'
import styled from '@emotion/styled'
import Header from './Header'
import Footer from './Footer'
import { useRouter } from 'next/router'
import SideBar from './Sidebar'

const Layout = ({ children }) => {
  const router = useRouter()
  const [isSideBarOpen, setIsSideBarOpen] = useState(false)
  const { isLoggedIn } = useSelector(selectUser)

  const isHeaderVisible = !(
    (router.pathname === '/' && isLoggedIn === false) ||
    router.pathname === '/login' ||
    router.pathname === '/create-account' ||
    router.pathname === '/otp' ||
    router.pathname.includes('/create')
  )

  const isFooterVisible = !(
    router.pathname === '/login' ||
    router.pathname === '/create-account' ||
    router.pathname === '/otp' ||
    router.pathname.includes('/read')
  )

  const handleSidebarOpen = useCallback(() => {
    setIsSideBarOpen(true)
  }, [])

  return (
    <Root>
      {isHeaderVisible ? <Header handleSidebarOpen={handleSidebarOpen} /> : null}
      <SideBar isOpen={isSideBarOpen} setIsOpen={setIsSideBarOpen} />

      <Main>{children}</Main>

      {isFooterVisible && <Footer />}
    </Root>
  )
}

const Root = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
`

const Main = styled.main`
  width: 100%;
  margin-top: ${props => props.margin_top};
`

export default Layout
