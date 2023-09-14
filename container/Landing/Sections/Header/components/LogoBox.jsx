import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined'
import styled from '@emotion/styled'
import React from 'react'
import Link from 'next/link'

const LogoBox = () => {
  return (
    <Link href={'/'}>
      <a>
        <Root>
          <AutoStoriesOutlinedIcon />
          <Text>E Book</Text>
        </Root>
      </a>
    </Link>
  )
}

const Root = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.palette.secondary.main};
  .MuiSvgIcon-root {
    font-size: 36px;
  }
  @media (max-width: 359px) {
    gap: 5px;
    .MuiSvgIcon-root {
      font-size: 32px;
    }
  }
`

const Text = styled.div`
  color: ${({ theme }) => theme.palette.primary.main};
  font-weight: 700;
  font-size: 1.6rem;
  white-space: nowrap;
  @media (max-width: 359px) {
    font-size: 1.4rem;
  }
`

export default LogoBox
