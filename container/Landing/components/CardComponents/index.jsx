import styled from '@emotion/styled'
import { Skeleton, Typography } from '@mui/material'
import React from 'react'
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded'
import { mainMaxWidth } from 'Container/Landing/common/styles'

export const NotAvailableBar = ({ Icon, text }) => {
  return (
    <Root>
      {!Icon ? (
        <Icon sx={{ fontSize: 90 }} color="primary" />
      ) : (
        <IconCr variant="h2" fontSize={60} component="div" color="primary">
          N/A
        </IconCr>
      )}
      <Text variant="h5" component="div" textAlign="center" fontWeight={600} color="secondary">
        {text ? text : 'Content Not Available'}
      </Text>
    </Root>
  )
}

export const ErrorBar = () => {
  return (
    <Root>
      <ErrorOutlineRoundedIcon style={{ fontSize: 70 }} />
      <Text variant="h5" component="div">
        Something went wrong
      </Text>
    </Root>
  )
}

export const LoadingBar = () => {
  return (
    <LoadingBarRoot>
      <main>
        <Skeleton variant="rounded" width={246} height={300} />
        <Skeleton variant="rounded" width={246} height={300} />
        <Skeleton variant="rounded" width={246} height={300} />
        <Skeleton variant="rounded" width={246} height={300} />
        <Skeleton variant="rounded" width={246} height={300} />
        <Skeleton variant="rounded" width={246} height={300} />
      </main>
    </LoadingBarRoot>
  )
}

const LoadingBarRoot = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  main {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 35px;
  }

  height: 370px;
  --element-left-spacing: calc((100vw - var(--main-max-width)) / 2 + var(--main-side-spacing));
  @media (max-width: ${mainMaxWidth}px) {
    --element-left-spacing: var(--main-side-spacing);
  }
  padding: var(--element-left-spacing);
  /* align-self: center; */
`

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0px;
  height: 350px;
`

const IconCr = styled(Typography)`
  font-weight: 600;
  padding: 0.5rem;
`
const Text = styled(Typography)``
