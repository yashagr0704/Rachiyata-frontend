import { Box, Button, Drawer, IconButton, Typography } from '@mui/material'
import React, { useState } from 'react'
import SortRoundedIcon from '@mui/icons-material/SortRounded'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import StyledCheckButton from './StyledCheckButton'

const DrawerBox = ({ List }) => {
  const { query, pathname } = useRouter()

  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const SelectedList = List.find(item => item.contentType.toLowerCase() === query?.content_type?.toLowerCase())

  return (
    <>
      <StyledButton color="primary" endIcon={<SortRoundedIcon />} onClick={() => setIsDrawerOpen(true)}>
        Select Genre
      </StyledButton>

      <StyledDrawer anchor="bottom" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <Content p={2} width="100%" height="500px">
          <Heading>{SelectedList?.contentType}</Heading>
          {SelectedList?.categoryList?.map((category, idx) => (
            <StyledCheckButton key={idx} category={category} contentType={SelectedList?.contentType?.toLowerCase()} />
          ))}
          <StyledButton />
        </Content>
      </StyledDrawer>
    </>
  )
}

export default DrawerBox

const Heading = styled(Typography)`
  font-weight: 700;
  font-size: 20px;
  letter-spacing: 0.1px;
`

const StyledDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    overflow: hidden;
  }
`

const Content = styled(Box)`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  gap: 12px;
  @media (min-width: 430px) {
    &::-webkit-scrollbar {
      width: 7px; /* width of the entire scrollbar */
      height: 7px;
      /* height: px; */
    }

    &::-webkit-scrollbar-track {
      background: #fff; /* color of the tracking area */
      border-radius: 1px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${props => props.theme.palette.primary.main}77; /* creates padding around scroll thumb */
      border-radius: 1px;
    }
    &::-webkit-scrollbar-corner {
      background: #1c252e; /* color of the tracking area */
    }
  }
`

const StyledButton = styled(Button)`
  font-weight: 600;
  font-size: 0.87rem;
  padding: 5px 13px 4px;
  color: ${({ theme }) => theme.palette.secondary.main};
  background: ${({ theme }) => theme.palette.primary.main}11;
  border-radius: 11px;
  transition: 0.35s ease-in-out;
  text-transform: capitalize;
  letter-spacing: 0.5px;
  float: right;
  align-self: flex-end;
  @media (min-width: 500px) {
    padding: 5px 13px 3px;
    font-size: 0.95rem;
  }

  &:hover {
    background: ${({ theme }) => theme.palette.primary.main}1f;
  }

  .MuiButton-label {
    display: flex;
    align-items: center;
  }

  .MuiButton-startIcon {
    margin-right: 4x;
    margin-left: -4px;
  }
  .MuiButton-endIcon {
    margin-right: -4px;
    margin-left: 12px;
  }
`
