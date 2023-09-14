import styled from '@emotion/styled'
import React from 'react'
import TabBox from './components/TabBax'
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded'
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined'
import LocalLibraryRoundedIcon from '@mui/icons-material/LocalLibraryRounded'

const TabList = [
  {
    id: 0,
    name: 'Novel',
    contentType: 'novel',
    category: 1,
    icon: <MenuBookRoundedIcon color="white" />,
  },
  // {
  //   id: 1,
  //   name: 'Short',
  //   contentType: 'short',
  //   category: 1,
  //   icon: <LocalLibraryRoundedIcon color="white" />,
  // },
  {
    id: 1,
    name: 'Poem',
    contentType: 'poem',
    category: 1,
    icon: <DriveFileRenameOutlineOutlinedIcon color="white" />,
  },
]

const TabSection = () => {
  return (
    <Root>
      <TabBox TabList={TabList} />
    </Root>
  )
}

const Root = styled.div`
  background: ${({ theme }) => theme.palette.primary.main};

  margin-inline: var(--main-side-spacing);
  max-width: calc(var(--main-max-width) - (var(--main-side-spacing) * 2 + 50px));
  width: calc(100% - (var(--main-side-spacing) * 2 + 50px));
  align-self: center;
  z-index: 1;
  overflow: hidden;
  display: flex;
  justify-content: center;

  --main-height: 60px;
  --top-spacing: 6px;
  --bottom-spacing: 4px;
  --tab-button-gap: 35px;
  border-radius: 30px;
  margin-top: -35px;

  @media (max-width: 1200px) {
    --main-height: 55px;
    --top-spacing: 4px;
    --bottom-spacing: 2px;
    --tab-button-gap: 20px;
    border-radius: 22px;
    margin-top: -30px;
  }

  @media (max-width: 600px) {
    --main-height: 55px;
    --top-spacing: 4px;
    --bottom-spacing: 2px;
    --tab-button-gap: 10px;
  }
  @media (max-width: 410px) {
    width: calc(100% - (var(--main-side-spacing) * 2 + 27px));
  }

  @media (max-width: 380px) {
    --tab-button-gap: 5px;
    width: calc(100% - (var(--main-side-spacing) * 2 + 25px));
  }

  @media (max-width: 400px) {
    width: calc(100% - (var(--main-side-spacing) * 2 - 12px));
    position: sticky;
    top: 80px;
    z-index:1 ;
    border-radius: 12px;
    --main-height: 50px;
    --top-spacing: 4px;
    --bottom-spacing: 6px;
    --tab-button-gap: 0px;
  }
  padding-top: var(--top-spacing);
  padding-bottom: var(--bottom-spacing);
`

export default TabSection
