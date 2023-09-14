import React from 'react'
import styled from '@emotion/styled'

import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined'

const DividerBar = (props) => {
  return (
    <Root {...props}>
      <Bar />
      <StyledIcon />
      <Bar />
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: stretch;
  gap: 10px;
  width: 100%;
`

const Bar = styled.div`
  height: 3px;
  background: ${({ theme }) => theme.palette.secondary.main}44;
  flex: 1;
  border-radius: 3px;
`

const StyledIcon = styled(AutoStoriesOutlinedIcon)`
  font-size: 28px;
  color: ${({ theme }) => theme.palette.secondary.main}44;
`

export default DividerBar
