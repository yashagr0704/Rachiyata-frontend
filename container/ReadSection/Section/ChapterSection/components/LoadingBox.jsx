import styled from '@emotion/styled'
import React from 'react'
import { CircularProgress } from '@mui/material'

const LoadingBox = () => {
  return (
    <Root>
      <CircularProgress />
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  height: 100px;
`

export default LoadingBox
